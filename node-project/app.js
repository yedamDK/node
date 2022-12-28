import express from "express";
import boardRouter from "./routes/board.js";
import boardRouter2 from "./routes/pm1410board.js";
import customerRouter from "./routes/customer.js";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/login", function (req, res) {
  console.log(req.query.email);
  res.send("로그인완료");
});

app.use(express.static("public"));
app.use("/static", express.static("public"));

app.use("/board", boardRouter);
app.use("/pm1410board", boardRouter2);
app.use("/customer", customerRouter);
app.use(function (err, req, res, newxt) {
  res.status(500).json({ code: res.statusCode, msg: err.message });
});

app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log("첫번째 콜백"); //터미널(서버콘솔)에서 확인가능
    next(); //안 넣으면 뒤에 실행x
  },
  (req, res) => {
    res.send("두번째 콜백"); //부메랑에서 확인가능
  }
);

app.get("/", (req, res) => {
  res.send("hello world!!!!!!!!!!");
});

//abcd 또는 acd
app.get("/ab?cd", (req, res) => {
  res.send("정규표현식");
});

app.get("/b[0-9]?cd", (req, res) => {
  res.send("정규표현식숫자");
});

app.get("/c+de", (req, res) => {
  res.send("정규표현식c한개이상");
});
app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
