import express from "express";
import { AppDataSource } from "./config/db.config";
import employeeRouter from "./route/employee.route";
import expressAsyncHandler from "express-async-handler";

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get(
  "/hello-world",
  expressAsyncHandler(async (req, res) => {
    res.send("HELLO WORLD!");
  }),
);

app.use("/employees", employeeRouter);

// start express server
app.listen(3000);
