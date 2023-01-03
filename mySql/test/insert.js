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

let sql = "insert into customers set ?";
/* where 안 됨
"insert into customers values (?,?,?)라고 설정하면
let data = ['?','?','?']로 해서 */

let data = {
  //id: 1,   자동(auto increment AI)으로 설정했기 때문에 정하지 않고 마지막에 추가된 다음번호로 들어감
  name: "최기자",
  email: "dkfjslf@dk.com",
  phone: "011-1213-4413",
  address: "",
};
//위에 입력한 data 값을 넣기 위해 중간에 data 추가
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
  //몇번째에 추가했는지 번호 조회(할때는 위에 if 구문 가리기)
  // connection.query("SELECT LAST_INSERT_ID()", (err, results) => {
  //   console.log("id:", results);
  // });
});

connection.end(); //DB 접속종료
