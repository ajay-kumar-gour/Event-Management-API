const express = require("express");

const router = express.Router();

//create an event
//see all list events

router.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "list of all events",
  });
});
//see a particular event by eventID
//update an existing event
//delete an event

module.exports = router;
