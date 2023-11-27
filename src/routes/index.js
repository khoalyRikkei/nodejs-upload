const userRouter = require("./user.route");

function routes(app) {
  app.use("/api/v1/users", userRouter);
}

module.exports = routes;
