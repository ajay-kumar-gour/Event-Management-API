const Event = require("../Models/eventModels");

const isValidDateFormat = require("../Utils/dateFormatCheck");

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

const searchEventByPriceTypeController = async (req, res) => {
  const priceType = req.params.priceType;

  try {
    let eventDataFilteredByPrice;
    if (priceType == "Free") {
      eventDataFilteredByPrice = await Event.find({ price: "Free" });
      if (eventDataFilteredByPrice.length == 0) {
        return res.status(404).send({
          success: false,
          message: "No Free Event found",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Free Event(s) found",
        totalFreeEvent: eventDataFilteredByPrice.length,
        eventDataFilteredByPrice,
      });
    } else if (priceType == "Paid") {
      eventDataFilteredByPrice = await Event.find({ price: { $ne: "Free" } });
      if (eventDataFilteredByPrice.length == 0) {
        return res.status(404).send({
          success: false,
          message: "No Paid Event found",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Paid Event(s) found",
        totalPaidEvent: eventDataFilteredByPrice.length,
        eventDataFilteredByPrice,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "Invalid PriceType, it can be either Paid or Free",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const searchEventByDateRangeController = async (req, res) => {
  const { startDate, endDate } = req.query;
  console.log("startDate & endDate is", startDate, "&", endDate);

  console.log("  isValidDateFormat(startDate)", isValidDateFormat(startDate));
  console.log("  isValidDateFormat(startDate)", isValidDateFormat(endDate));
  try {
    if (!startDate || !endDate) {
      return res.status(400).send({
        success: false,
        message: "startDate and endData value is is missing in query",
      });
    } else if (!isValidDateFormat(startDate) || !isValidDateFormat(endDate)) {
      return res.status(400).send({
        success: false,
        message: "Start date and/or end date must be in YYYY-MM-DD format.",
      });
    } else {
      const eventDataFilteredByDateRange = await Event.find({
        startDate: { $gte: new Date(startDate) },
        endDate: { $lte: new Date(endDate) },
      });

      if (!eventDataFilteredByDateRange) {
        return res.status(404).send({
          success: false,
          message: "No Event forund in the given date range",
        });
      }

      res.status(200).send({
        success: true,
        message: "Event(s) found in the given data range",
        totalEventFound: eventDataFilteredByDateRange.length,
        eventDataFilteredByDateRange,
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

module.exports = {
  searchEventByNameController,
  searchEventByCityController,
  searchEventByCategoryController,
  searchEventByDateRangeController,
  searchEventByPriceTypeController,
};
