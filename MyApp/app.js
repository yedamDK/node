var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//로그인할때 씀
// const session = require("express-session");
// const fileStore = require("session-file-store")(session);
const cookieSession = require("cookie-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// app.use(
//   cookieSession({
//     name: "session",
//     key: [
//       /* secret keys */
//     ],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );
//로그인 할 때 씀
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true, //https용 http에서는 무쓸모
      maxAge: 60000, //아무동작 없으면 1분 후 세션 종료
    },
    store: new fileStore(),
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //post
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
