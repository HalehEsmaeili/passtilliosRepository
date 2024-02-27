import express from 'express';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3'; // Make sure to import GetObjectsCommand
import  s3  from "../aws.js";  // Assuming 's3' is exported from 'aws.js'


const port = 3001;

// Use express.Router() to define routes
const router = express.Router();

// Configure AWS SDK v3
/*
const s3Client = new S3Client({
  region: 'your-region',
  credentials: {
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key',
  },
});
*/

// Find AWS image folder
router.post('/getImages', async (req, res) => {
  const bucketName = 'passtillios-bucket-web';
  const folderPath = req.body.folderPath;

  const params = {
    Bucket: bucketName,
    Prefix: folderPath, // Optional: If your images are stored in a specific folder
  };

  try {
    // Use AWS SDK v3 to send a ListObjectsCommand to list objects in the specified S3 bucket
    const data = await s3.send(new ListObjectsCommand(params));
  
    // Construct URLs for each image
    const urls = data.Contents.slice(1).map((object) => {
      return `https://${bucketName}.s3.amazonaws.com/${object.Key}`;
    });

    res.json({ urls });
  } catch (err) {
    console.error(err);  // Log the error for debugging
    res.status(500).json({ error: 'Unable to list objects in the S3 bucket.' });
  }
});


export default router;
