//npm install express
//Express cookie 검색해보기
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //쿠키
  res.send("express");
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
