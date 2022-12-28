import { Router } from "express";
const route = Router();

route.get("/", (req, res) => {
  res.send("get");
});
route.post("/", (req, res) => {
  res.send("post");
});
route.put("/", (req, res) => {
  res.send("put");
});
route.delete("/", (req, res) => {
  res.send("delete");
});

export default route;
