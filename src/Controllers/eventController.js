const Event = require("../Models/eventModels");
const mongoose = require("mongoose");
const createEvent = async (req, res) => {
  try {
    const data = req.body;
    if (Object.keys(data).length == 0) {
      return res.status(400).send({
        message: "Request Body is empty",
      });
    }
    console.log(data);

    const newEvent = new Event(data);

    const createdEvent = await newEvent.save();

    // res.status(200).send({
    //   message: eventData,
    //   type: typeof eventData,
    //   length: Object.keys(eventData).length,
    // });

    res.status(201).send({
      success: true,
      message: "Event Created",
      data: createdEvent,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const eventsData = await Event.find();
    res.status(200).send({
      success: true,
      message: "All Events fetched",
      totalEvents: eventsData.length,
      eventsData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventID;
    console.log(eventId);
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).send({
        success: false,
        message: "Provided Event ID is Invalid",
      });
    }
    const eventData = await Event.findById(eventId);

    if (!eventData) {
      return res.status(404).send({
        success: false,
        message: "Event does not exist with provided Event ID",
      });
    }

    res.status(200).send({
      success: true,
      message: "Event with provided event ID is fetched",
      event: eventData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = { createEvent, getAllEvents, getEventById };
