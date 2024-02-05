import 'dotenv/config';
import { Router } from 'express';

import axios from 'axios';
import https from 'https';

const router = Router();
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

// Now you can use these variables in your code
// For example, logging them to the console


router.post('/saveEmail', async (req, res) => {
  console.log("hey in save email");
  const email = req.body.email;
  const name = req.body.name;

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
    auth:process.env.MAILCHIMP_API_KEY,
  };
//`${process.env.MAILCHIMP_API_KEY}`
  const reqq = https.request(url, options, function (response) {
   //let frontend know the status
    let statusCode = response.statusCode;
    res.json({ statusCode });

    if (response.statusCode === 200) {
      console.log("mailchip success");
    } else {
      console.log("mailchip error");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  reqq.write(flat_data);
  reqq.end();
  
});

export default router;
