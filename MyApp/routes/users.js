var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function (req, res) {
  req.session.email = req.body.email;
  req.session.is_logined = true;
  //cookie할때 필요 없음
  // req.session.save((err) => {
  //   if (err) throw err;
  //   res.redirect("/");
  // });
});
//로그아웃
router.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/login.html");
});

module.exports = router;
