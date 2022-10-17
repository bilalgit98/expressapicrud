import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
//init express application
const app = express();

//specify port
const PORT = 5000;

//init bodyparser middleware
app.use(bodyParser.json());

app.use("/users", usersRoutes);

//creating different routes
app.get("/", (req, res) => {
  res.send("hello from homepage");
});

//listen for incoming request
app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
