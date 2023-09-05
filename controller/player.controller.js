const { getThePlareqyer, addPlayer} = require("../services/player.service");

class playerController {
  async getPlayer(req, res, next) {
    try {
      const teams = await getThePlayer();
      if (!teams) {
        return res.json({ message: "Something went wrong" });
      } else {
        return res.status(200).json(teams);
      }
    } catch (error) {
      next(error);
    }
  }

  async addPlayers(req, res, next) {
    try {
      const players = await addPlayer(req);
      console.log(players)
      if (!players) {
        res.header(`Content-Type`, `application/json`);
        res.status(500).json({ message: "Unsuccessfull" });
        return res;
      } else {
        return res.status(200).json(players);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new playerController();
