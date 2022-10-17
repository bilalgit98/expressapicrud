import express from "express";
import bodyParser from "body-parser";

//init express application
const app = express();

//specify port
const PORT = 5000;

//init bodyparser middleware
app.use(bodyParser.json());

//listen for incoming request
app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
