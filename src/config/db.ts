import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "ronit@147963",
    database: process.env.DB_NAME || "quiz_db",
    port: Number(process.env.DB_PORT) || 3306
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1);
    } else {
        console.log("✅ MySQL Connected!");
    }
});

export default db;
