var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" }); //views폴더에 index.jade 에 title 변수를 Express로 바꿀 것이다
});

module.exports = router;
