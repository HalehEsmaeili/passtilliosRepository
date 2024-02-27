import express from 'express';
import pool from '../db.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();

const bucketName = 'passtillios-bucket-web';

router.post('/get-crew', [
  check('pageId').exists().withMessage('pageId is required'),
  check('pageId').isInt().withMessage('pageId must be an integer')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { pageId } = req.body;
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

    const result = await pool.query(query, [pageId]);
    client.release();

    if (result.rows.length > 0) {
      const imagesWithUrls = result.rows.map((crew) => {
        const formattedImages = crew.images.map((image) => {
          return {
            url: `https://${bucketName}.s3.amazonaws.com/crew/${crew.crew_name}/${image.imagename}`,
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

export default router;
