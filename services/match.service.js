// services/product.services.js

const matchModel = require("../models/match.model");

class MatchService {
  async getThemactch(req, res, next) {
    try {
      // Call the logoutUser function from the AuthService
      const getMatches = await matchModel.find();
      console.log(getMatches);
      return getMatches;
    } catch (error) {
      next(error);
    }
  }
  async addMatch(req) {
    const newSeries = new matchModel(req.body);
    await newSeries.save();
    return newSeries;
  }
}

module.exports = new MatchService();
