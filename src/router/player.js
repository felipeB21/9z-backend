const { Router } = require("express");
const router = Router();
const multer = require("multer");
const playerController = require("../controller/player");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-players", playerController.getAllPlayers);
router.post("/submit", upload.single("image"), playerController.submitPlayer);
router.put(
  "/update/:id",
  upload.single("image"),
  playerController.updatePlayer
);
router.delete("/delete/:id", playerController.deletePlayer);

module.exports = router;
