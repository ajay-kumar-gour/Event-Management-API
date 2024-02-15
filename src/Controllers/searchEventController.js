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
const searchEventByCityController = async (req, res) => {
  const cityName = req.params.city;
  console.log("cityName", cityName);
  try {
    const eventDataFilteredCity = await Event.find({
      "location.city": { $regex: new RegExp(cityName, "i") },
    });

    console.log("eventDataFilteredCity", eventDataFilteredCity);
    if (eventDataFilteredCity.length == 0) {
      return res.status(404).send({
        success: false,
        message: "No Event found in the provided location(city)",
      });
    }

    res.status(200).send({
      success: true,
      message: "Event found",
      totalEvent: eventDataFilteredCity.length,
      event: eventDataFilteredCity,
    });
  } catch (errror) {
    res.status(500).send({
      success: false,
      message: "Internal Server Errior",
      error: error.message,
    });
  }
};

const searchEventByCategoryController = async (req, res) => {
  const eventCategory = req.params.category;
  console.log("eventCategory", eventCategory);
  try {
    const eventDataFilteredCategory = await Event.find({
      category: { $regex: new RegExp(eventCategory, "i") },
    });

    console.log("eventDataFilteredCategory", eventDataFilteredCategory);
    if (eventDataFilteredCategory.length == 0) {
      return res.status(404).send({
        success: false,
        message: "No Event found with the provided event category",
      });
    }

    res.status(200).send({
      success: true,
      message: "Event found",
      totalEvent: eventDataFilteredCategory.length,
      event: eventDataFilteredCategory,
    });
  } catch (errror) {
    res.status(500).send({
      success: false,
      message: "Internal Server Errior",
      error: error.message,
    });
  }
};
const searchEventByDateRangeController = (req, res) => {};

module.exports = {
  searchEventByNameController,
  searchEventByCityController,
  searchEventByCategoryController,
  searchEventByDateRangeController,
};
