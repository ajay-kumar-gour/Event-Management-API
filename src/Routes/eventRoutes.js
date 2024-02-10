const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
} = require("../Controllers/eventController");

//create an event
router.post("/", createEvent);

// //see all list events
router.get("/", getAllEvents);

// //see a particular event by eventID

router.get("/:eventId", getEventById);
// //update an existing event

router.put("/:eventId", updateEventById);

// //delete an event

router.delete("/:eventId", deleteEventById);

module.exports = router;
