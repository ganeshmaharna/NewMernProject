const express = require("express");

const { PostController } = require("../../controllers");
const { PostMiddlewares } = require("../../middlewares");
console.log("This is Post controller");
console.log(PostController);
console.log("This is airplane middleware");
console.log(PostMiddlewares);
const router = express.Router();
console.log("Inside Post routes");
//  /api/v1/posts(this is a post request)
router.post(
  "/",
  PostMiddlewares.validateCreateRequest,
  PostController.createPost
);
module.exports = router;
