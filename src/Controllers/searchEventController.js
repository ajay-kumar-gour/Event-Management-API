const Event = require("../Models/eventModels");

const searchEventByNameController = async(req, res) => {

  const eventName = req.params.name;


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
