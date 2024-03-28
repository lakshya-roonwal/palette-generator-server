const express = require("express");
const { getAllPalettes } = require("../controllers/palette.controlers");

const router = express.Router();

router.get("/getallpalettes",getAllPalettes)

module.exports = router;