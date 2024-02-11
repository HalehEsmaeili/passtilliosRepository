import 'dotenv/config';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import axios from 'axios';
import https from 'https';

const router = Router();

// Rate limit configuration
const limiter = rateLimit({
  windowMs: 20 * 60 * 1000, // 20 minutes
  max: 3, // limit each IP to 5 requests per windowMs
});

// Apply the rate limiter to all requests to the '/saveEmail' route
router.post('/saveEmail', limiter, async (req, res) => {

  const email = req.body.email;
  const name = req.body.name;
//const tel=
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name
        }
      }
    ]
  };

  //console.log('MAILCHIMP_API_KEY:', process.env.MAILCHIMP_API_KEY);

  const flat_data = JSON.stringify(data);
  const url = "https://us11.api.mailchimp.com/3.0/lists/9e391126bd";
  const options = {
    method: "POST",
    auth: process.env.MAILCHIMP_API_KEY,
  };

  const reqq = https.request(url, options, function (response) {
    // let frontend know the status
    let statusCode = response.statusCode;
    res.json({ statusCode });

    if (response.statusCode === 200) {
      console.log("mailchimp success");
    } else {
      console.log("mailchimp error");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  reqq.write(flat_data);
  reqq.end();
});

export default router;
