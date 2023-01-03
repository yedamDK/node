/* //웹브라우저에 저장되는 것은 cookie 서버에 저장되는 것은 session
//https://www.npmjs.com/package/cookie-session 가서 확인

const app = require("../mySql/app")

//MyApp폴더에서 app.js 에서
npm install expres-sessionStorage
app.js에 넣기
const session require("express-session");
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true, https에서 사용
      maxAge: 60000,
    },
        store: new fileStore(),
  })
);

views폴더에 index.jade파일에서
div=session.username  //세션보기 위해 추가

users.js파일에서 router.get에 send 전에 넣기
  console.log(req.session.username); //session 읽을 수 있음

app.post("/login",
  Select
  //id와 pw 일치하면
  req.session. 네임 =벨류

app.post("/board/write".
  작성자 <- req.session.
  insert

index.ejs 파일에서
로그아웃/로그인 if else 쓰기
    <% if(res.session.usernae) {%>
      로그아웃
    <%}%>
    <% if(!res.session.usernae) {%>
      로그인
    <%}%>
 */
