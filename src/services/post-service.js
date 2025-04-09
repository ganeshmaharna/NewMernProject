const { PostRepository } = require("../repository");
const { StatusCodes } = require("http-status-codes");
const postRepository = new PostRepository();
// const AppError=require("../utils/errors/app-error");

async function createPost(data) {
  try {
    console.log("Inside the service");
    console.log(data);
    const post = await postRepository.create(data);
    return post;
  } catch (error) {
    console.log("This is Service Error:", error);

    // Handle Mongoose ValidationError
    if (error.name === "ValidationError") {
      const explanation = Object.values(error.errors).map((err) => err.message);
      throw new AppError(
        explanation,
        "ValidationError",
        StatusCodes.BAD_REQUEST
      );
    }

    throw new AppError(
      "Cannot create a new airplane object",
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createPost,
};
