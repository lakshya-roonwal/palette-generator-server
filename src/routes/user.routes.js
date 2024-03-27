const express = require("express");
const { setUser } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/setuser", setUser);

module.exports = router;
