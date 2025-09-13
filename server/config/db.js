import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed: ", err);
  } else {
    console.log("Database connection successful");
  }
});

export default db;
