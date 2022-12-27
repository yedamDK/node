const http = require("http");
//import http form 'http'; 와 같다
//todolist 하면 전체 다
//todo?no=1면 1번째 0주면 0번째만
let todoList = [
  { content: "test1", completed: false },
  { content: "test2", completed: true },
  { content: "test3", completed: false },
  { content: "test4", completed: false },
];

const server = http.createServer((req, res) => {
  const myUrl = new URL("http://127.0.0.1:3000" + req.url);
  if (myUrl.pathname == "/todoList") {
    res.end(JSON.stringify(todoList));
    //JSON.stringify -> JavaScript값이나 객체를 JSON 문자열로 변환(object를 string으로 바꿈)
  } else if (myUrl.pathname == "/info") {
    res.end(info());
    // http://127.0.0.1:3000/todo?no=1처럼 한개씩 출력
  } else if (myUrl.pathname == "/todo") {
    let no = myUrl.searchParams.get("no");
    res.end(JSON.stringify(todoList[no]));
  } else {
    res.end("no path");
  }
});
server.listen(3000, () => {
  console.log("server running http://127.0.0.1:3000");
});
