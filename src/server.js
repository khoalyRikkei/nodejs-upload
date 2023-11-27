const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const { multerConfig } = require("./configs/multer.config");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storageFirebase } = require("./configs/firebase.config");
const { uploadFile } = require("./middlewares/uploadFile.middleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.post(
  "/api/v1/upload-firebase",
  multerConfig.single("image"),
  uploadFile,
  (req, res) => {
    console.log(req.body);
  }
);
app.listen(8888, () => {
  console.log("Connecting to http://localhost:8888");
});
