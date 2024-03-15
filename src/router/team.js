const { Router } = require("express");
const router = Router();
const multer = require("multer");

const teamController = require("../controller/team");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/get", teamController.getTeams);
router.post("/submit", upload.single("image"), teamController.submitTeam);
router.put("/update/:id", upload.single("image"), teamController.updateTeam);

module.exports = router;
