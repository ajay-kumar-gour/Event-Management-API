const Event = require("../Models/eventModels");

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

 
};
module.exports = { createEvent, getAllEvents };
