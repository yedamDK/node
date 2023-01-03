//npm install cookie-parser 하기
const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.get("/", (req, res) => {
  //쿠키
  console.log("Cookies: ", req.cookies); //req.cookies.test라고 하면 test 쿠키만 확인
  res.cookie("test", "test");
  res.send("express");
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
