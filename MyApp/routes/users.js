var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.session.username); //session 읽을 수 있음
  res.send("respond with a resource");
});

router.post("/login", function (req, res) {
  req.session.email = req.body.email; //post 파라미터여서 query 아니라 body
  req.session.is_logined = true;
  //cookie할때 필요 없음
  req.session.save((err) => {
    //session에 저장
    if (err) throw err;
    res.redirect("/"); //로그인하면 어디로 갈지 routes에 index.js파일 설정따라 감
  });
});
//로그아웃
router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/login.html");
});

module.exports = router;
