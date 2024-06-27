const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/data", verifyToken, testController.getData);

module.exports = router;
