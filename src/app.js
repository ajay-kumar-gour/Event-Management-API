const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;
console.log(PORT);

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: "True",
    message: "Welcome to Event Management API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
