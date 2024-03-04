import express from "express";
import pool from "../db.js";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.get(
  "/contentForMapping/:pageId",
  [
    check("pageId").exists().withMessage("pageId is required"),
    check("pageId").isInt({ min: 1 }).withMessage("Invalid pageId"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const pageId = req.params.pageId;
      const client = await pool.connect();

      const query = {
        text: "SELECT json_content FROM pageContentToMap WHERE pages_id = $1 ORDER BY position",
        values: [pageId],
      };

      const result = await client.query(query);
      client.release();

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
  }
);
/*router.get("/sections/:pageTitle/:sectionTitle", [
  // Validation middleware for the '/sections/:pageId/:sectionId' route
  check('pageTitle').exists().withMessage('page title is required'),
  check('sectionTitle').exists().withMessage('section title is required'),
  check('pageTitle').isString().withMessage('Invalid page title'),
  check('sectionTitle').isString().withMessage('Invalid sectiontitle')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { pageTitle, sectionTitle } = req.params;
    const client = await pool.connect();

    const result = await client.query(
      `
      SELECT
        sections.title AS section_title,
        ARRAY_AGG(DISTINCT headers.content) AS header_contents,
        ARRAY_AGG(DISTINCT texts.content) AS text_contents,
        MIN(texts.position) AS min_position
      FROM
        sections
      LEFT JOIN
          pages ON pages.id = sections.page_id
      LEFT JOIN
        headers ON sections.id = headers.section_id
      LEFT JOIN
        texts ON sections.id = texts.section_id
      WHERE
        pages.title= '${pageTitle}'
        AND sections.title = '${sectionTitle}'
      GROUP BY
        sections.id, sections.title
      ORDER BY
        min_position;
      `,
      [pageTitle, sectionTitle]
    );

    client.release();

    if (result.rows.length > 0) {
      res.json({ sections: result.rows[0] });
    } else {
      res.status(404).json({ error: "No sections found for the specified page" });
    }
  } catch (error) {
    console.error("Error retrieving sections:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
*/
router.get(
  "/sections/:pageId/:sectionId",
  [
    // Validation middleware for the '/sections/:pageId/:sectionId' route
    check("pageId").exists().withMessage("pageId is required"),
    check("sectionId").exists().withMessage("sectionId is required"),
    check("pageId").isInt({ min: 1 }).withMessage("Invalid pageId"),
    check("sectionId").isInt({ min: 1 }).withMessage("Invalid sectionId"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { pageId, sectionId } = req.params;
      const client = await pool.connect();

      const result = await client.query(
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

      client.release();

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
  }
);

router.get("/page-images/:sectionId/:pageId", async (req, res) => {
  try {
    const { sectionId, pageId } = req.params;
    const client = await pool.connect();

    const result = await client.query(
      `
      SELECT
        page_images.key_name AS url
      FROM
        page_images
      INNER JOIN
        sections ON page_images.section_id = sections.id
      WHERE
        sections.id = $1
        AND sections.page_id = $2;
      `,
      [sectionId, pageId]
    );

    client.release();

    res.json({ pageImages: result.rows });
  } catch (error) {
    console.error("Error retrieving page images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//return images, quote for the header of the given page
router.get("/header-page/:pageId", async (req, res) => {
  try {
    const { pageId } = req.params;
    const client = await pool.connect();

    const sectionResult = await client.query(
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
        AND sections.position = 1
      GROUP BY
        sections.id, sections.title
      ORDER BY
        min_position;
      `,
      [pageId]
    );

    const pageImagesResult = await client.query(
      `
      SELECT
      page_images.img_url AS url
      FROM
      page_images
      WHERE
      page_images.page_id = $1;
      `,
      [pageId]
    );

    client.release();

    if (sectionResult.rows.length > 0) {
      res.json({
        text: sectionResult.rows[0],
        pageImages: pageImagesResult.rows,
      });
    } else {
      res
        .status(404)
        .json({ error: "No sections found for the specified page" });
    }
  } catch (error) {
    console.error("Error retrieving combined sections:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
