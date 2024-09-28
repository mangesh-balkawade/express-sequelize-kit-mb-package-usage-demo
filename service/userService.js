// Import the userRepository instance from the userRepository file
const { userRepository } = require("../repository/userRepository");

// Import the generic Service class from the express-sequelize-kit-mb package
const { Service } = require("express-sequelize-kit-mb");

// Define the UserService class extending the generic Service
class UserService extends Service {
    constructor() {
        // Call the parent Service constructor and pass the userRepository instance
        // This allows the service layer to utilize the repository's methods
        super(userRepository);
    }
}

// Create an instance of the UserService
let userService = new UserService();

// Export the userService instance to be used in the controller layer
module.exports = { userService };
