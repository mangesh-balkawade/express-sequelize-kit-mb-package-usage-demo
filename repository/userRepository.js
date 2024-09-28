// Import the User model
const UserModel = require("../models/userModel");

// Import the Repository class from express-sequelize-kit-mb package
const { Repository } = require("express-sequelize-kit-mb");

// Define the UserRepository class extending the generic Repository
class UserRepository extends Repository {
    constructor() {
        // Call the parent Repository constructor and pass necessary parameters:
        // 1. UserModel: The Sequelize model for the User table
        // 2. Soft delete field: Leave as an empty string if not using soft delete
        // 3. Soft delete option: Set to false to disable soft deletion

        // If soft delete is required, set the field name (e.g., "deleteFlag") and true as the second and third arguments.
        super(UserModel, "deleteFlag", true);
    }
}

// Create an instance of the UserRepository
const userRepository = new UserRepository();

// Export the userRepository instance to be used in the service layer
module.exports = { userRepository };
