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
    if (Array.isArray(data)) {
      const savedEvents = await Event.insertMany(data);
      res.status(201).send({
        succes: true,
        message: "Events Created",
        numberofEventCreated: savedEvents.length,
        data: savedEvents,
      });
    } else {
      const newEvent = new Event(data);

      const createdEvent = await newEvent.save();
      res.status(201).send({
        success: true,
        message: "Event Created",
        numberofEventCreated: 1,
        data: createdEvent,
      });
    }

    // res.status(200).send({
    //   message: eventData,
    //   type: typeof eventData,
    //   length: Object.keys(eventData).length,
    // });
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
    const eventId = req.params.eventId;
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

const updateEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    console.log(eventId);

    const toBeUpdated = req.body;
    console.log(toBeUpdated);

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).send({
        success: false,
        message: "Provided Event ID is Invalid",
      });
    }
    const existingEventData = await Event.findById(eventId);
    if (!existingEventData) {
      return res.status(404).send({
        success: false,
        message: "Event does not exist with provided Event ID",
      });
    }

    const updatedEventData = await Event.findByIdAndUpdate(
      eventId,
      toBeUpdated,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).send({
      success: true,
      message: "Event Updated",
      updatedEvent: updatedEventData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      messsage: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    console.log(eventId);

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).send({
        success: false,
        messsage: "Provided Event ID is Invalid",
      });
    }

    const existingEventData = await Event.findById(eventId);
    if (!existingEventData) {
      return res.status(404).send({
        success: false,
        message: "Event does not exist with provided Event ID",
      });
    }
    const deletedEventData = await Event.findByIdAndDelete(eventId);

    res.status(200).send({
      success: true,
      message: "Event is deleted with provided EventID",
      deleteEvent: deletedEventData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteAllEvents = async (req, res) => {
  try {
    const checkExistingData = await Event.find();
    if (checkExistingData.length == 0) {
      return res.status(404).send({
        success: false,
        message: "No Events found to delete",
      });
    }
    const deletedData = await Event.deleteMany();
    console.log(deletedData);

    res.status(204).send({
      success: true,
      message: "All Events deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.messsage,
    });
  }
};
module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
  deleteAllEvents,
};
