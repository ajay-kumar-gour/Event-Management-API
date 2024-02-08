const express = require("express");
const router = express.Router();

const eventController = require("../Controllers/eventController");

//create an event
router.post(("/", eventController.createEvent));

//see all list events
router.get("/", eventController.getAllEvents);

//see a particular event by eventID

router.get("/:eventID", eventController.getEventById);
//update an existing event

router.put("/:eventID", eventController.updateEventById);
//delete an event

router.delete("/:eventID", eventController.deleteEventById);

module.exports = router;
