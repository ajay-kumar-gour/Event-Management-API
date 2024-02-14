const Event = require("../Models/eventModels");

const searchEventByNameController = async (req, res) => {
  const eventName = req.params.name;

  
  try {
    const eventNameFilteredData = await Event.find({
      name: { $regex: new RegExp(eventName, "i") },
    });

    if (!eventNameFilteredData) {
      return res.status(404).send({
        success: false,
        message: "No Event Found with provided event",
      });
    }
    res.status(200).send({
      success: true,
      message: "Event Found",
      totalEventFound: eventNameFilteredData.length,
      event: eventNameFilteredData,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const searchEventByCityController = (req, res) => {};
const searchEventByCategoryController = (req, res) => {};
const searchEventByDateRangeController = (req, res) => {};

module.exports = {
  searchEventByNameController,
  searchEventByCityController,
  searchEventByCategoryController,
  searchEventByDateRangeController,
};
