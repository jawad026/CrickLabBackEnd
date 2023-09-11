const express = require("express");
const playerController = require("../controller/player.controller");

const router = express.Router();

/* GET users listing. */

router.get("/:id", playerController.getPlayer);
router.post("/addplayer", playerController.addPlayers);

// Add the signup route

module.exports = router;
