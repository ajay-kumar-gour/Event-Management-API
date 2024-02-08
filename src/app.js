const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectToDB = require("./Database/DB-Connect");
const app = express();
const PORT = process.env.PORT;
console.log(PORT);

const eventRouter = require("./Routes/eventRoutes");

app.use("/events", eventRouter);
app.get("/", (req, res) => {
  res.status(200).json({
    sucess: "True",
    message: "Welcome to Event Management API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.green.bold.bgBrightWhite);
  connectToDB();
});
