const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const playerRouter = require("./router/player");
const teamRouter = require("./router/team");
const matchRouter = require("./router/match");
const coachRouter = require("./router/coach");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cors());

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/v1/player", playerRouter);
app.use("/api/v1/team", teamRouter);
app.use("/api/v1/match", matchRouter);
app.use("/api/v1/coach", coachRouter);
