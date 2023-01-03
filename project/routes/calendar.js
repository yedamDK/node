var express = require("express");
const pool = require("./pool");
var router = express.Router();

sql = {
  select: "select * from board",
  selectOne: "select * from board where no =?",
  insert: "insert into board set ?",
  update: "update board set ?   where no=?",
  delete: "delete from board where no =?",
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
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
router.delete("/:no", (req, res) => {
  pool.query(sql.delete, req.params.no, (err, results, fields) => {
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
