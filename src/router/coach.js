const { Router } = require("express");
const router = Router();
const multer = require("multer");

const coachController = require("../controller/coach");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/get", coachController.getCoach);
router.post("/submit", upload.single("image"), coachController.submitCoach);

module.exports = router;
