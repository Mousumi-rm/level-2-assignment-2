import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config( { path:path.join((process.cwd(),'.env')) })

export default {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
}