const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectToDB = require("./Database/DB-Connect");
const app = express();

const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
const swaggerJsdoc = require("swagger-jsdoc");

const PORT = process.env.PORT;
console.log(PORT);
app.use(express.json());
const eventRouter = require("./Routes/eventRoutes");

app.use("/events", eventRouter);

const options = {
  definition: {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    openapi: "3.0.0",
    info: {
      title: "Event Management API",
      version: "1.0.0",
      description:
        "The Event Management API is a comprehensive solution designed to facilitate the organization, coordination, and management of various events. It provides robust functionality for creating, updating, and deleting events, as well as retrieving event details. With intuitive endpoints and robust data handling, this API simplifies event management tasks, making it an essential tool for event planners, organizers, and administrators.",
    },

    servers: [
      {
        url: "http://localhost:8000", // Replace this with your server URL
        description: "Local development server",
      },
      {
        url: "https://eventmanagemntapi.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./src/Routes/*.js", "./src/Controllers/*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

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
