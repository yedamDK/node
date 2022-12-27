//동기식=블로킹 함수
const fs = require("fs"); //html <script src='xxx.js'>와 같다
let data = fs.readFileSync("./template/test.txt", "utf8");
console.log(data);
