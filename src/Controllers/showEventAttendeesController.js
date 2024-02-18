const Event = require("../Models/eventModels");

const mongoose = require("mongoose");

const showEventAttendeesController = async (req, res) => {
  const eventID = req.params.eventID;

  console.log("eventID", eventID);

  try {
    if (!mongoose.Types.ObjectId.isValid(eventID)) {
      return res.status(400).send({
        success: false,
        message: "Provided Event ID is Invalid",
      });
    }

    const eventData = await Event.findById(eventID);

    if (!eventData) {
      return res.status(404).send({
        success: false,
        message: "No event found with provided EventID",
      });
    }

    if (eventData.attendees.length == 0) {
      return res.status(200).send({
        success: true,
        message: "No user  has registered for this event so far",
      });
    }

    const eventAttendees = eventData.attendees;
    res.status(200).send({
      success: true,
      messsage: "Attendees found that has regitered this event",
      eventAttendees,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = showEventAttendeesController;
