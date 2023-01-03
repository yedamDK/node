const http = require("http");
const cookie = require("cookie");
http
  //(req,res)는 콜백함수
  .createServer((req, res) => {
    let cookies;
    if (req.headers.cookie) {
      cookies = cookie.parse(req.headers.cookie);
      console.log(cookies.username);
    }
    console.log(cookies);
    res.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        `username=hong; Max-Age=${5 * 60}; HttpOnly`,
      ],
    }); //200이면 ok , 뒤에는 옵션 ["쿠키이름=쿠키값"] f12 network에서 headers에서 response headers와 request headers에 set cookie가 보임 newwork옆에 application 추가해서 누르면 cookies에 보임
    //Max-Age를 줘서 창을 닫아도 일정시간 쿠기가 유지되게 함 res.writeHead가 있으면 창을 닫아도 계속 추가되기 때문에 테스트할 때 가리고 창에 꺼지면 지워져야 될 쿠기도 삭제 후 다시 켜보면 추가되지 않는 것을 볼 수 있음
    //콘솔창에서 document.cookie로 쿠기검색이 되는데 HttpOnlt와 secure는 안 됨
    res.end("hello");
  })
  .listen(3000, () => {
    //server.listen(300);해도 됨 메서지 체인
    console.log("server running http://localhost:3000");
  });
