import e from "express";
import express from "express";
import { v4 as uuidv4 } from "uuid";

//import router
const router = express.Router();

//mock database
const users = [];

//init router ( all routes here are starting with "/users" ("/"))
router.get("/", (req, res) => {
  res.send(users);
});

//post
router.post("/", (req, res) => {
  //adding the request to the mock database
  const user = req.body;
  //using uuid

  console.log({ ...user, id: uuidv4() });

  users.push({ ...user, id: uuidv4() });

  res.send(`user with the name "${user.firstName}" has been added!`);
});

//.get
router.get("/:id", (req, res) => {
  const { id } = req.params;

  //finding the user id
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

//deleting users
router.delete("/:id", (req, res) => {
  const { id } = req.params;
});
export default router;
