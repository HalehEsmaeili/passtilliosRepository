import express from 'express';
import pool from '../db.js';
//import { check, validationResult } from 'express-validator';
const router = express.Router();

router.get('/product-images', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `
      SELECT
        product_images.img_url AS url,
        product_images.caption,
        product.name,
        product.preis,
        product.number_in_stock,
        product.description
      FROM
        product_images
      INNER JOIN
        product ON product_images.product_id = product.id;
      `
    );

    client.release();
console.log(result);
    res.json({ productImages: result.rows });
  } catch (error) {
    console.error('Error retrieving product images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
