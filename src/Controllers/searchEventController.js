const Event = require("../Models/eventModels");

const searchEventByNameController = async (req, res) => {
  const eventName = req.params.name;

  try {
    const eventDataFilteredName = await Event.find({
      name: { $regex: new RegExp(eventName, "i") },
    });
    console.log("eventNameFilteredData", eventDataFilteredName);
    if (eventDataFilteredName.length == 0) {
      return res.status(404).send({
        success: false,
        message: "No Event Found with provided event",
      });
    }
    res.status(200).send({
      success: true,
      message: "Event Found",
      totalEventFound: eventDataFilteredName.length,
      event: eventDataFilteredName,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


const searchEventByCategoryController = (req, res) => {};
const searchEventByDateRangeController = (req, res) => {};

module.exports = {
  searchEventByNameController,
  searchEventByCityController,
  searchEventByCategoryController,
  searchEventByDateRangeController,
};
