import express from "express";

//import router
const router = express.Router();
const users = [
  {
    firstName: "john",
    lastName: "doe",
    age: 25,
  },
  {
    firstName: "jane",
    lastName: "doe",
    age: 23,
  },
];

//init router ( all routes here are starting with "/users" ("/"))
router.get("/", (req, res) => {
  console.log(users);
  res.send("Hello");
});

router.post("/", (req, res) => {});

export default router;
