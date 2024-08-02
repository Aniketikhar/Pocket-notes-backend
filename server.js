import express from "express";
import MongoConnect from "./Config.js";
import cors from 'cors';
import routes from './Routes/routes.js';
import dotenv from "dotenv";

const app = express();
const PORT = 8000;
dotenv.config();


// database connection
MongoConnect(
  process.env.MONGO_URL
)
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log("error while database connecting ", e));


// midddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


// routes
app.use("/", routes)


app.listen(PORT, () => console.log(`Port is running on ${PORT}`));
