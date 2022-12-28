import { Router } from "express";
const route = Router();

route
  .get("/", (req, res) => {
    res.send("board get");
  })
  .post("/", (req, res) => {
    res.send("board post");
  })
  .put("/", (req, res) => {
    res.send("board put");
  })
  .delete("/", (req, res) => {
    res.send("board delete");
  });

export default route;
