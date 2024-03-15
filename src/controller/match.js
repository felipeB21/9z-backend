const Match = require("../models/Match");

module.exports = {
  submitMatch: async (req, res) => {
    try {
      const { homeTeam, awayTeam, date, time, result, isActive, streamers } =
        req.body;
      const match = new Match({
        homeTeam,
        awayTeam,
        result,
        date,
        time,
        streamers,
        isActive,
      });
      await match.save();
      res.json(match);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getMatches: async (req, res) => {
    try {
      const matches = await Match.find().sort({ createdAt: -1 }).limit(3);
      res.json(matches);
    } catch (error) {
      res.json({ message: error });
    }
  },
  updateMatch: async (req, res) => {
    try {
      const { id } = req.params;
      const { homeTeam, awayTeam, result, date, time, streamers, isActive } =
        req.body;
      const updatedMatch = await Match.findByIdAndUpdate(
        id,
        {
          homeTeam,
          awayTeam,
          result,
          date,
          time,
          streamers,
          isActive,
        },
        { new: true }
      );
      if (!updatedMatch) {
        return res.status(404).json({ message: "Match not found" });
      }
      res.json(updatedMatch);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
