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
