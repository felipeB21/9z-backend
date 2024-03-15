const { Router } = require("express");
const router = Router();

const matchController = require("../controller/match");

router.get("/get", matchController.getMatches);
router.post("/submit", matchController.submitMatch);
router.put("/update/:id", matchController.updateMatch);

module.exports = router;
