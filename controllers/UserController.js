// Import the generic Controller class from the express-sequelize-kit-mb package
const { Controller } = require("express-sequelize-kit-mb");

// Import the userService instance from the userService file
const { userService } = require("../service/userService");


// Define the UserController class extending the generic Controller
class UserController extends Controller {
  constructor() {
    // Call the parent Controller constructor and pass the following:
    // 1. userService: The service layer object to handle business logic and repository interaction
    // 2. Enable logs: Set to true if you want to enable logging for actions within the controller
    super(userService, true);
  }
}

// Create an instance of the UserController
let userController = new UserController();

// Export the userController instance to be used in the route layer
module.exports = { userController };
