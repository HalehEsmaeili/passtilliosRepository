///content.js

import express from 'express';
const router = express.Router();
import pool from '../db.js';
router.get("/contentForMapping/:pageId", async (req, res) => {
    const pageId = req.params.pageId;
  
    console.log(pageId);
    try {
      const client = await pool.connect();
  
      // Query to retrieve content based on the provided pageId
      const query = {
        text: "SELECT json_content FROM pageContentToMap WHERE pages_id = $1 ORDER BY position",
        values: [pageId],
      };
  
      const result = await client.query(query);
  
      if (result.rows.length > 0) {
        const jsonArray = result.rows.map((row) => row.json_content);
        res.json(jsonArray);
      } else {
        res.status(404).json({
          error:
            "Nothing on content meant for mapping found for the specified page",
        });
      }
    } catch (error) {
      console.error("Error retrieving sections:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Example route handler using the connection pool
  router.get("/sections/:pageId/:sectionId", async (req, res) => {
    const { pageId, sectionId } = req.params;
  
    try {
      const result = await req.pool.query(
        `
      SELECT
      sections.title AS section_title,
      ARRAY_AGG(DISTINCT headers.content) AS header_contents,
      ARRAY_AGG(DISTINCT texts.content) AS text_contents,
      MIN(texts.position) AS min_position
    FROM
      sections
    LEFT JOIN
      headers ON sections.id = headers.section_id
    LEFT JOIN
      texts ON sections.id = texts.section_id
    WHERE
      sections.page_id = $1
      AND sections.id = $2
    GROUP BY
      sections.id, sections.title
    ORDER BY
      min_position;
      `,
        [pageId, sectionId]
      );
  
      if (result.rows.length > 0) {
        res.json({ sections: result.rows[0] });
      } else {
        res
          .status(404)
          .json({ error: "No sections found for the specified page" });
      }
    } catch (error) {
      console.error("Error retrieving sections:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  export default router;
  