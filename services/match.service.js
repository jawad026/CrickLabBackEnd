// services/product.services.js

const matchModel = require("../models/match.model");

class MatchService {
  async getThemactch(req, res, next) {
    try {
      // Call the logoutUser function from the AuthService
      const getMatches = await matchModel
        .find()
        .populate("teamA")
        .populate("teamB")
        .exec();
      console.log(getMatches);
      return getMatches;
    } catch (error) {
      return error;
    }
  }
  async addMatch(req) {
    const newSeries = new matchModel(req.body);
    await newSeries.save();
    return newSeries;
  }
}

module.exports = new MatchService();
