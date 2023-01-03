var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.username = "hong"; //session 값 일기
  res.render("index", { title: "Express", session: req.session });
});

module.exports = router;
