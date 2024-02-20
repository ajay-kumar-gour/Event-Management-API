const mongoose = require("mongoose");

const Event = require("../Models/eventModels");

const eventRegisterController = async (req, res) => {
  const eventID = req.params.eventID;
  const userData = req.decodedData;
  const userEmail = userData.email;
  const userFirstName = userData.firstName;
  const userLastName = userData.lastName;
  const userName = userFirstName + " " + userLastName;

  // console.log("username", userName);
  // console.log(userData);
  // console.log(eventID);
  // res.status(200).send({ userEmail, eventID });
  try {
    if (!mongoose.Types.ObjectId.isValid(eventID)) {
      return res.status(400).send({
        success: false,
        message: "Provided Event ID is Invalid",
      });
    }

    const eventToRegister = await Event.findById(eventID);
    if (!eventToRegister) {
      return res.status(404).status({
        success: false,
        message: "No Event exist with provided event ID",
      });
    }

    const existingAttendee = eventToRegister.attendees.find((attendee) => {
      return attendee.attendeeEmail == userEmail;
    });
    console.log("existingAttendee", existingAttendee);

    if (!existingAttendee) {
      eventToRegister.attendees.push({
        attendeeName: userName,
        attendeeEmail: userEmail,
      });

      const eventRegistered = await eventToRegister.save();
      res.status(200).send({
        success: true,
        message: "user successfully registered to the event",
        eventRegistered,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "user is already registered for the event",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }

};

module.exports = eventRegisterController;
