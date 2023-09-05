const express = require("express");
const seriesController = require("../controller/series.controller");
const matchController = require("../controller/match.controller");

const router = express.Router();

/* GET users listing. */

router.get("/", matchController.getMatch);
router.post("/addmatch", matchController.addTheMatch);

// Add the signup route

module.exports = router;
