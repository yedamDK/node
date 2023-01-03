const mysql = require("mysql");
//mysql 접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); //DB접속
sql = "SELECT * FROM customers";
//sql = "SELECT * FROM customers where id=1";
// 1번만 조회

//let id = 6; //req.para
//sql = "SELECT * FROM customers where id=?";
//connection.query(sql, id, function (err, results, fields) {
//  쿼리를 만들어서 원하는 데이터 조회 id만 조회하니까 id로 넣음

// let id = 6; //req.para
// let name = 'sdfsf';
// let data = [id,name];
//sql = "SELECT * FROM customers where id=? and name=?";
//connection.query(sql, data, function (err, results, fields) {
//  쿼리를 만들어서 원하는 데이터 조회  id와 name을 다 가져올거니까 data로 묶어서

connection.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB 접속종료
