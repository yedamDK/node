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

let sql = "update customers set ?  where id=?";
let data = [{ email: "park@gmail.com", name: "park" }, 3]; //3번 id 수정
//위에 입력한 data 값을 넣기 위해 중간에 data 추가
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB 접속종료
