express = require("express");
const pool = require("../mysql/pool");
let router = express.Router();

router.get("/", (req, res) => {
  const sql = "select * from customers"; //mysql에서 만든 파일 이름
  pool.query(sql, (err, result) => {
    //ejs 템플릿 페이지 //데이터
    console.log(result); //result 값을 받아오는지 확인하기 위해 넣음 없어도 됨
    res.render("customer", { list: result }); //customer.ejs .ejs는 생략
  });
});
module.exports = router;
