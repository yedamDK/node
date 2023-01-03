var express = require("express");
const pool = require("../mysql/pool");
var router = express.Router();

sql = {
  select: "select * from calendar",
  selectOne: "select * from calendar ",
  insert: "insert into calendar set ?",
  update: "update calendar set ?   where title=?",
  delete: "delete from calendar where title =?",
};
/* //전제조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    res.send(results);
  });
}); */

//단건조회
router.get("/:title", (req, res) => {
  pool.query(sql.selectOne, req.params.title, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
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
router.put("/", (req, res) => {
  let data = [req.body, req.params.title];
  pool.query(sql.update, data, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//삭제
router.delete("/", (req, res) => {
  pool.query(sql.delete, req.params.title, (err, results, fields) => {
    let resultData = {};
    if (err) {
      console.log(err);
      throw err;
    }
    if (results.changedRows > 0) {
      resultData.results = true;
      resultData.data = req.body;
    } else {
      resultData.results = false;
    }
    res.send(results);
    res.end();
  });
});

module.exports = router;
