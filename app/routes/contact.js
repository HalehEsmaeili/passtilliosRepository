import 'dotenv/config';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import https from 'https';
import { check, validationResult } from 'express-validator';

const router = Router();

// Rate limit configuration
const limiter = rateLimit({
  windowMs: 20 * 60 * 1000, // 20 minutes
  max: 3, // limit eac IP to 2 requests per windowMs
  handler: (req, res) => {
    // Send a custom response when the rate limit is exceeded
    res.status(429).json({
      error: 'Rate limit exceeded',
      message: 'You have reached the maximum number of requests. Please try again later.',
    });
  },
});
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Set up SendinBlue API key
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR API KEY';

// Create ContactsApi instance
var apiInstance = new SibApiV3Sdk.ContactsApi();

// Define route to save email in SendinBlue contact list
router.post('/save-email', [
  limiter,
  check('email').isEmail().withMessage('Invalid email address'),
  check('name').notEmpty().withMessage('Name is required'),
  check('city').notEmpty().withMessage('City is required'),
  check('tel').optional().isMobilePhone('any', { strictMode: false }).withMessage('Telephone must be a valid phone number')

], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const tel = req.body.tel;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Create a new contact
  var createContact = new SibApiV3Sdk.CreateContact({
    email: email
  });

  // Call SendinBlue API to create the contact
  apiInstance.createContact(createContact)
    .then(function(data) {
      console.log('API called successfully. Returned data: ' + data);
      res.status(200).json({ message: 'Email saved successfully' });
    })
    .catch(function(error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Apply the rate limiter to all requests to the '/saveEmail' route
router.post(
  '/saveEmail',
  [
    limiter,
    check('email').isEmail().withMessage('Invalid email address'),
    check('name').notEmpty().withMessage('Name is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('tel').optional().isMobilePhone('any', { strictMode: false }).withMessage('Telephone must be a valid phone number')

  ],
  async (req, res) => {
    console.log('i am in save email post');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const tel = req.body.tel;

    const data = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: name,
            PHONE: tel,
            COUNTRY: country,
            STATE: state,
            CITY: city,
           
          },
        },
      ],
    };

    const flat_data = JSON.stringify(data);
    const url = 'https://us11.api.mailchimp.com/3.0/lists/9e391126bd';
    const options = {
      method: 'POST',
      auth: process.env.MAILCHIMP_API_KEY,
    };

    const reqq = https.request(url, options, function (response) {
      // let frontend know the status
      let statusCode = response.statusCode;
      res.json({ statusCode });

      if (response.statusCode === 200) {
        console.log('mailchimp success');
      } else {
        console.log('mailchimp error');
      }
      response.on('data', function (data) {
        console.log(JSON.parse(data));
      });
    });

    reqq.write(flat_data);
    reqq.end();
  }
);

export default router;
