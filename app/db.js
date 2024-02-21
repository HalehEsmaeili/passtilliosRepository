import pg from 'pg';

// Database configuration with connection pool
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 8001,
});

export default pool;