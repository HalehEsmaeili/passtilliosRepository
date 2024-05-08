import 'dotenv/config';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import  fetch from 'node-fetch';
import https from 'https';
import { check, validationResult } from 'express-validator';

const router = Router();

// Rate limit configuration
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 4, // limit eac IP to 2 requests per windowMs
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

], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, city, state, country } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const url = 'https://api.brevo.com/v3/contacts/doubleOptinConfirmation';
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
          COUNTRY: country,
          STATE: state,
          CITY: city,
        },
        includeListIds: [Number(process.env.BREVO_LIST_ID)],
        email: email,
        templateId: Number(process.env.BREVO_TEMPLATE_ID),
        redirectionUrl: "https://www.passtillios.com/success"
      })
    };

    fetch(url, options)
    .then(response => {
      if (response.status === 204) {
        res.status(200).json({ message: 'Data saved successfully.' });
      } else {
        return response.json();
      }
    })
    .catch(err => console.error('error:' + err));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// Apply the rate limiter to all requests to the '/saveEmail' route
/*
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
*/

// Endpoint to handle reCAPTCHA verification
/*
router.post('/verify-recaptcha', async (req, res) => {
  const { recaptchaToken } = req.body;

  try {
    // Replace 'YOUR_SECRET_KEY' with your actual reCAPTCHA secret key
    const secretKey = 'YOUR_SECRET_KEY';
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    // Verify reCAPTCHA token with Google's reCAPTCHA API
    const response = await axios.post(verificationURL);
    const { success } = response.data;

    if (success) {
      // reCAPTCHA verification successful
      res.json({ success: true, message: 'reCAPTCHA verification successful' });
    } else {
      // reCAPTCHA verification failed
      res.json({ success: false, message: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
*/
export default router;
