const express = require("express");
const { setUser } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/setuser", setUser);
// TODO : Have to add delete and update routes

module.exports = router;
