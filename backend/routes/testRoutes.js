const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/data", testController.getData);

module.exports = router;
