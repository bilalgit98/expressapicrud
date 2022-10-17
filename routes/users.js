import express from "express";

//import router
const router = express.Router();

//init router ( all routes here are starting with "/users" ("/"))
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
