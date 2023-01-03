var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

sql = {
  select: "select * from books order by title", //title 이름순으로 정렬
  selectOne: "select * from books where no =?",
  insert: "insert into books set ?",
  update: "update books set ? where id=?",
  delete: "delete from books where id = ?",
};
//전제조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    res.send(results);
  });
});

//단건조회
router.get("/:no", (req, res) => {
  pool.query(sql.selectOne, req.params.no, function (err, results, fields) {
    res.json(results[0]);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.id];
  pool.query(sql.update, data, (err, results, fields) => {
    let resultData = {};
    if (err) {
      console.log(err);
      // throw err;
    }
    // if (results.changedRows > 0) {
    //   resultData.results = true;
    //   resultData.data = req.body;
    // } else {
    //   resultData.results = false;
    // }
    res.json(resultData); //json 대신에 send해도 됨
  });
});

//삭제
router.delete("/:no", (req, res) => {
  pool.query(sql.delete, req.params.id, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200; //res.send(results); 해도 됨
    res.end();
  });
});

module.exports = router;
