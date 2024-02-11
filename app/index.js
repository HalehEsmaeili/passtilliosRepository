import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import pg from 'pg';
import bodyParser from 'body-parser';
import cors from 'cors';

// Get the directory name using ESM features
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });
import 'dotenv/config';

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mount routes
app.use('/api', routes);
console.log("All Environment Variables:", process.env.DB_NAME);
/*
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 10 requests per windowMs
  message: 'Too many requests for contact form from this IP, please try again later.',
});

// Use the rate limiter middleware only for the contact route
app.use('/api/contact/saveEmail', contactLimiter);
*/


// Database configuration with connection pool
const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 8001,
});

// Middleware to add the database pool to the request object
app.use((req, _, next) => {
  console.log("conntected to db"),
  req.pool = pool;
  next();
});

// Example route handler using the connection pool
app.get('/sections/:pageId/:sectionId', async (req, res) => {
  const { pageId,sectionId } = req.params;

  try {
    const result = await req.pool.query(`
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
    `, [pageId,sectionId]);

    if (result.rows.length > 0) {
      res.json({ sections: result.rows[0] });
    } else {
      res.status(404).json({ error: 'No sections found for the specified page' });
    }
  } catch (error) {
    console.error('Error retrieving sections:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch all unspecified calls
app.get('*', (_, res) => {
  res.send('<h1 style="text-align: center;">404 Not Found.</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import pg from 'pg';
import bodyParser from 'body-parser';
import cors from 'cors';

// Get the directory name using ESM features
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables

dotenv.config({ path: `${__dirname}/.env` });
import 'dotenv/config';
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mount routes
app.use('/api', routes);
console.log("All Environment Variables:", process.env.DB_NAME);
// Database configuration
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 8001,
});

// Connect to the database
db.connect()
  .then(() => {
    console.log('Connected to the database');
  
    // Continue with your code
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.stack);
  });

// Catch all unspecified calls
app.get('*', (_, res) => {
  res.send('<h1 style="text-align: center;">404 Not Found.</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/
