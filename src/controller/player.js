const Player = require("../models/Player");

module.exports = {
  submitPlayer: async (req, res) => {
    try {
      const { name, nickname, image, age, team, nationality } = req.body;
      const imagePath = req.file.path;

      const player = new Player({
        name,
        nickname,
        nationality,
        image: imagePath,
        age,
        team,
      });

      await player.save();

      res.json(player);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  updatePlayer: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, nickname, image, age, team, nationality } = req.body;
      const imagePath = req.file.path;

      const updatedPlayer = await Player.findByIdAndUpdate(
        id,
        {
          nationality,
        },
        { new: true }
      );

      if (!updatedPlayer) {
        return res.status(404).json({ message: "Player not found" });
      }

      res.json(updatedPlayer);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  getAllPlayers: async (req, res) => {
    try {
      const players = await Player.find();
      res.json(players);
    } catch (error) {
      res.json({ message: error });
    }
  },
  deletePlayer: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPlayer = await Player.findByIdAndDelete(id);
      if (!deletedPlayer) {
        return res.status(404).json({ message: "Player not found" });
      }
      res.json(deletedPlayer);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
