import express from "express";
//importing functions from controller
import {
  getUsers,
  createUser,
  findUser,
  deleteUser,
  updateUser,
} from "../controller/users.js";

//import router
const router = express.Router();

//init router ( all routes here are starting with "/users" ("/"))
router.get("/", getUsers);

//post (create)
router.post("/", createUser);

//.get (finding a single user)
router.get("/:id", findUser);

//deleting users
router.delete("/:id", deleteUser);

//update a user
router.patch("/:id", updateUser);

export default router;
