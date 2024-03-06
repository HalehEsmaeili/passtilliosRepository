import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import pg from "pg";
import pool from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
//import AWS  from 'aws-sdk';
import { GetObjectCommand } from '@aws-sdk/client-s3';
//const s3 = new S3Client();
// Get the directory name using ESM features
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use((req, _, next) => {
  req.pool = pool;
  next();
});



// Mount routes
app.use("/api", routes);
/*
console.log("All Environment Variables:", process.env.DB_NAME);

// Serve static assets (e.g., CSS, JavaScript) from the build folder
app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/*", (req, res) => {
 res.sendFile(
  path.join(__dirname,"../client/build/index.html"),
function(err){
  if(err){
    res.status(500).send(err);
  }
}
  );
});

*/
// Catch all unspecified calls



// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
////this function retrieves josn files of titles and texts which are meant to be mapped for that page
app.get("/contentForMapping/:pageId", async (req, res) => {
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
app.get("/sections/:pageId/:sectionId", async (req, res) => {
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



*/