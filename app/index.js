import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";
import pool from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";

// Get the directory name using ESM features
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://passtillios.com',
  // You can also specify more granular options here if needed
}));
app.options('*', cors()); // This should come after app.use(cors(...))

app.use((req, _, next) => {
  req.pool = pool;
  next();
});

// Mount routes
app.use("/api", routes);

// Serve the React app for all other routes
app.use(express.static(`${__dirname}/../client/build`));
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/../client/build/index.html`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
