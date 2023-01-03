var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";
  pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
//단건조회(단건이라 전체랑 달리 id 설정할 것 두 군데)
router.get("/:id", (req, res) => {
  const id = req.params.id;
  sql = "SELECT * FROM customers where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]); //배열로 나와서 스트링으로 나오게 [0]
  });
});

//등록
router.post("/", (req, res) => {
  let sql = "insert into customers set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정;
router.put("/:id", (req, res) => {
  let sql = "update customers set ?     where id=?";
  let data = [req.body, req.params.id];
  pool.query(sql, data, function (err, results, fields) {
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
    res.json(resultData); //json 대신에 send해도 됨
  });
});
//삭제
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200; //res.send(results); 해도 됨
    res.end();
  });
});

module.exports = router;
