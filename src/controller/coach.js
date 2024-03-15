const Coach = require("../models/Coach");

module.exports = {
  submitCoach: async (req, res) => {
    try {
      const { name, nickname, age, team, nationality, image } = req.body;
      const imagePath = req.file.path;

      const coach = new Coach({
        name,
        nickname,
        nationality,
        image: imagePath,
        age,
        team,
      });

      await coach.save();

      res.json(coach);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getCoach: async (req, res) => {
    try {
      const coach = await Coach.find();
      res.json(coach);
    } catch (error) {
      res.json({ message: error });
    }
  },
};
