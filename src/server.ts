import app from "./app";
import mongoose from "mongoose";
import config from "./app/config"; // Assuming this contains database_url and port configurations

async function main() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(config.database_url as string);
    console.log("Database connection successful.");

    // Define the server port (fallback to default if not set)
    const port = config.port || 5000;

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    // Optionally exit the process if the server fails to start
    process.exit(1);
  }
}

// Call the main function to initialize the server
main();

 
