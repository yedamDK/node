const http = require("http");
const cookie = require("cookie");

http
  //(req,res)는 콜백함수
  .createServer((req, res) => {
    //쿠키 있을 때만(node app2.js 후 웹브라우저 가서 새로고침 해야 뜸)
    let cookies;
    if (req.headers.cookie) {
      //쿠키문자열을 파싱해서 배열로 바꾸기 터미널 창에서 npm install cookie 후 위에 cookie require 만들기(npm cookie 검색해서 볼 것)
      cookies = cookie.parse(req.headers.cookie);
      console.log(cookies.username);
    }
    console.log(cookies);
    res.writeHead(200, {
      "Set-Cookie": ["yummy_cookie=choco", "username=hong"],
    }); //200이면 ok , 뒤에는 옵션 ["쿠키이름=쿠키값"] f12 network에서 headers에서 response headers와 request headers에 set cookie가 보임 newwork옆에 application 추가해서 누르면 cookies에 보임

    res.end("hello");
  })
  .listen(3000, () => {
    //server.listen(300);해도 됨 메서지 체인
    console.log("server running http://localhost:3000");
  });
