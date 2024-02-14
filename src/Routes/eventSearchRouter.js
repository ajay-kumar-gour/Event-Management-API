const express = require("express");
const {
  searchEventByNameController,
  searchEventByCityController,
  searchEventByCategoryController,
  searchEventByDateRangeController,
} = require("../Controllers/searchEventController");

const router = express.Router();

router.get("/name/:name", searchEventByNameController);
router.get("/city/:city", searchEventByCityController);
router.get("/category/:category", searchEventByCategoryController);
router.get("/dateRange/:dateRange", searchEventByDateRangeController);

module.exports = router;
