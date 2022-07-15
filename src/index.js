const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./database/db");

app.use(express.json());
app.use(cors());

app.get("/api", require("./api/routes"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on *:${port}`));
