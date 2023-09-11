// services/product.services.js

const playerModel = require("../models/player.model");

class PlayerService {
  async getThePlayer(req) {
    try {
      // Call the logoutUser function from the AuthService
      const getTeams = await playerModel.find({ team: req });
      console.log(getTeams);
      return getTeams;
    } catch (error) {
      next(error);
    }
  }
  async addPlayer(req) {
    const player = playerModel
      .create(req.body)
      .then((player) => {
        return player;
      })
      .catch((err) => {
        return err;
      });
    return player;
  }
}

module.exports = new PlayerService();
