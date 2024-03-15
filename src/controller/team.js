const Team = require("../models/Team");

module.exports = {
  submitTeam: async (req, res) => {
    try {
      const { name, image, rank } = req.body;
      const imagePath = req.file.path;

      const team = new Team({
        name,
        image: imagePath,
        rank,
      });

      await team.save();

      res.json(team);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  updateTeam: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, image, rank } = req.body;
      const imagePath = req.file.path;

      const updatedTeam = await Team.findByIdAndUpdate(
        id,
        {
          name,
          image: imagePath,
          rank,
        },
        { new: true }
      );

      if (!updatedTeam) {
        return res.status(404).json({ message: "Team not found" });
      }

      res.json(updatedTeam);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getTeams: async (req, res) => {
    try {
      const teams = await Team.find();
      res.json(teams);
    } catch (error) {
      res.json({ message: error });
    }
  },
};
