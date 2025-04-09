const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.title) {
    ErrorResponse.message = "Something went wrong while creating airplane";
    // ErrorResponse.error = {
    //   explanation:
    //     "modelNumber is not found in the incoming request in the correct form",
    // };
    ErrorResponse.error=new AppError(["modelNumber is not found in the incoming request in the correct form",],StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
};