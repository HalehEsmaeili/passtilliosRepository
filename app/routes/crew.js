// routes/crew.js
import express from 'express';
import pool from '../db.js'; // Import the pool from db.js
//import {getMediaFromS3} from "../awsUtils.js";
const router = express.Router();


const bucketName = 'passtillios-bucket-web'; // Replace with your actual bucket name
//const folderName = 'yourFolderName'; // Replace with your actual folder name

router.post('/get-crew', async (req, res) => {
  const { pageId } = req.body;

  try {
    // Removed 'await req.pool.connect();'
    const client = await pool.connect();

    const query = `
      SELECT
        c.id AS crew_id,
        c.name AS crew_name,
        json_agg(json_build_object(
          'imagename', ti.imagename,
          'caption', ti.caption
        )) AS images
      FROM crew c
      LEFT JOIN team_images ti ON c.id = ti.crew_id
      WHERE pages_id = $1
      GROUP BY c.id, c.name;
    `;

    // Changed 'await req.pool.query' to 'await pool.query'
    const result = await pool.query(query, [pageId]);

    if (result.rows.length > 0) {
      const imagesWithUrls = result.rows.map((crew) => {
      
        const formattedImages = crew.images.map((image) => {
          console.log(crew.crew_name);
          return {
            url: `https://${bucketName}.s3.amazonaws.com/${crew.crew_name}/${image.imagename}`,
            caption: image.caption,
          };
        });
        return {
          crew_id: crew.crew_id,
          crew_name: crew.crew_name,
          images: formattedImages,
        };
      });

      res.json(imagesWithUrls);
    } else {
      res.status(404).json({
        error: "No crew information found",
      });
    }
  } catch (error) {
    console.error("Error retrieving crew information:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





/*
router.post('/get-crew', async (req, res) => {
  const { pageId } = req.body;

  try {
    // Removed 'await req.pool.connect();'
    const client = await pool.connect();

    const query = `
      SELECT
        c.id AS crew_id,
        c.name AS crew_name,
        json_agg(json_build_object(
          'imagename', ti.imagename,
          'caption', ti.caption
        )) AS images
      FROM crew c
      LEFT JOIN team_images ti ON c.id = ti.crew_id
      WHERE pages_id = $1
      GROUP BY c.id, c.name;
    `;

    // Changed 'await req.pool.query' to 'await pool.query'
    const result = await pool.query(query, [pageId]);

    if (result.rows.length > 0) {
     //console.log("crew backend",result.rows);
      res.json(result.rows);
    } else {
      res.status(404).json({
        error: "No crew information found",
      });
    }
  } catch (error) {
    console.error("Error retrieving crew information:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/get-image/:key', async (req, res) => {
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

export default router;
