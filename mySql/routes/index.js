var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" }); //views폴더에 index.jade 설정대로 감
});

module.exports = router;
