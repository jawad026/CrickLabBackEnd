const { getThemactch, addMatch } = require("../services/match.service");
const { getAllSeries, addSeries } = require("../services/series.service");

class matchController {
  async getMatch(req, res, next) {
    try {
      const match = await getThemactch();
      if (!match) {
        return res.json({ message: "Something went wrong" });
      } else {
        return res.status(200).json(match);
      }
    } catch (error) {
      next(error);
    }
  }

  async addTheMatch(req, res, next) {
    try {
      //   await verifyUser(req, res, () => {});

      //   // Check if the user is authenticated (verified)
      //   if (!req.user) {
      //     res.header(`Content-Type`, `application/json`);
      //     res.status(401);
      //     res.json({ message: "Unauthorized. Please login." });
      //     return res;
      //   }

      // req.body.series = req.params.id
      // console.log(req.user);

      const match = await addMatch(req);

      if (!match) {
        res.header(`Content-Type`, `application/json`);
        res.status(500).json({ message: "Unsuccessfull" });
        return res;
      } else {
        return res.status(200).json(match);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new matchController();
