const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// const loginRouter = require('./routes/login')
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const localRouter = require("./routes/local");
const uploadRouter = require("./routes/upload")


const multiparty = require('connect-multiparty')


require('./db/index')
const app = express();

app.use(multiparty({
  uploadDir: './static'
}))

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/login', loginRouter) // 登陆  路由
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/local", localRouter);
app.use("/upload", uploadRouter) // 上传处理
app.use("/static", express.static(path.join(__dirname, "static"))); // 静态文件处理


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next('/')
  // res.redirect('/')
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;