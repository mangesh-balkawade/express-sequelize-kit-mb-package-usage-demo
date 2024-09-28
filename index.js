// Load environment variables from .env file
require("dotenv").config();

// Import Express and CORS modules
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing) for all origins
app.use(cors({ origin: "*" }));

// Import and configure the database connection
require("./config/dbConfig");

// Import User routes
const UserRoutes = require("./routes/userRoutes");

// Use the imported User routes for all requests to /User endpoint
app.use("/User", UserRoutes);

// Load relationships between models (associations)
require("./models/relationships");

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
