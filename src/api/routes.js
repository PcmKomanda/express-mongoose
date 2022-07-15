// All routes for the API
const express = require("express");
const router = express.Router();

router.get("/", require("./index"));

module.exports = router;
