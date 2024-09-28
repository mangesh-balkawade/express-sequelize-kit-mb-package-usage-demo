// Import Express framework
const express = require("express");

// Create a new router instance
const route = express.Router();

// Import the userController instance from the UserController file
const { userController } = require("../controllers/UserController");

// Import middlewares for validation and assigning organization data
const { validateFields } = require("../middlewares/validationMiddleware");
const { assignOrgInfo } = require("../middlewares/routeMiddlewares");

// Define routes for user-related operations

// POST route to save user data
// Uses the validateFields middleware to ensure 'name' and 'age' are provided
// The assignOrgInfo middleware can be used to assign user-related data such as organizationId from the JWT token
// If you want to modify or assign additional data (like roles, user permissions), you can use middlewares to do so before passing the data to the controller same like given below
route.post("/User-Save", validateFields("name", "age"), assignOrgInfo, userController.saveData);

// PATCH route to update user data by ID
// You can add middlewares here if you need to modify the request data before updating the user record
route.patch("/User-Update/:id", userController.updateData);

// DELETE route to delete user data by ID
// Middlewares can be used here to apply additional checks before deletion (e.g., role-based access control)
route.delete("/User-Delete/:id", userController.deleteData);

// GET route to fetch user data by ID
// If you need to filter or modify the response, use a middleware before calling the controller method
route.get("/User-Get-Data-By-Id/:id", userController.getDataById);

// GET route to fetch all users
// Middlewares can be added to modify or limit the data being fetched (e.g., based on user roles, organizations, etc.)
route.get("/User-Get-All-Data", userController.getAllData);

// GET route to fetch all users with pagination
// If you want to customize pagination or filtering criteria dynamically, middlewares can handle those assignments before the controller processes the request
route.get("/User-Get-All-Data-By-Pagination", userController.getAllDataWithPagination);

// Export the route to be used in other parts of the application
module.exports = route;
