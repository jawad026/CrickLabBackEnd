// services/product.services.js

const teamModel = require("../models/teams.model");

class TeamService {
  async getTheTeams(req, res, next) {
    try {
      // Call the logoutUser function from the AuthService
      const getTeams = await teamModel.find();
      console.log(getTeams);
      return getTeams;
    } catch (error) {
      next(error);
    }
  }
  async addTeams(req) {
    const newteam = new teamModel(req.body);
    await newteam.save();
    return newteam;
  }
}

module.exports = new TeamService();
