import s3 from "./aws.js";


// Functioon to retrieve photos from AWS S3
async function getMediaFromS3(bucketName, folderName) {
    try {
      // Parameters for listing objects in the specified bucket and folder
      const params = {
        Bucket: bucketName,
        Prefix: folderName,
      };
  
      // List objects in the specified bucket and folder
      //const data = await s3.listObjectsV2(params).promise();
      const data = await s3.send(new GetObjectCommand(params));
  
      // Extract photo URLs from the response
      const photos = data.Contents.map((object) => ({
        url: `https://${bucketName}.s3.amazonaws.com/${object.Key}`,
      }));
  
      return photos;
    } catch (error) {
      console.error('Error retrieving photos from AWS S3:', error);
      throw error; // Propagate the error to the caller
    }
  }
  
  module.exports = {
    getMediaFromS3,
  };

/*
  app.get('/get-image/:key', async (req, res) => {
    const { key } = req.params;
  
    const params = {
      Bucket: 'passtillios-bucket-web',
      Key: `/haleh/${key}`, // Use the key parameter from the request
    };
  
    try {
      // Use the new AWS SDK v3 to get an object from S3
      const data = await s3.send(new GetObjectCommand(params));
  
      // Set appropriate headers
      res.setHeader('Content-Type', data.ContentType);
      res.send(data.Body);
    } catch (error) {
      console.error('Error retrieving image:', error);
      return res.status(500).send('Error retrieving image');
    }
  });
  */