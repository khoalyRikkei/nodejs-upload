const uploadFile = (req, res, next) => {
  console.log("kiem tra name", req.name);
  console.log(222, req.file);

};

module.exports = {
  uploadFile,
};
