import 'dotenv/config';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import  fetch from 'node-fetch';
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




// Define route to save email in SendinBlue contact list
router.post('/save-to-tempo-contactlist-brevo', [
  limiter,
  check('email').isEmail().withMessage('Invalid email address'),
  check('name').notEmpty().withMessage('Name is required'),
  check('city').notEmpty().withMessage('City is required'),
 // check('tel').optional().isMobilePhone('any', { strictMode: false }).withMessage('Telephone must be a valid phone number')

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
 // const tel = req.body.tel;
 // SMS: tel
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const url ='https://api.brevo.com/v3/contacts/doubleOptinConfirmation';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      attributes: {
        VORNAME: name,
        EMAIL:email,
        COUNTRY: country,
        STATE: state,
        CITY: city,
       
      },
      includeListIds: [process.env.BREVO_LIST_ID ],
      email: email,
      templateId: process.env.BREVO_TEMPLATE_ID ,
      redirectionUrl: process.env.BREVO_REDIRECT_URL
    })
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
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
