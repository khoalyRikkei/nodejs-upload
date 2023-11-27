const express = require("express");
const userController = require("../controllers/user.controller");

const { upload } = require("../configs/multer.config");

const userRouter = express.Router();
// Dungf single khi upload 1 file --> req.file
userRouter.post(
  "/upload-avatar",
  upload.single("image"),
  userController.uploadFile
);

module.exports = userRouter;
