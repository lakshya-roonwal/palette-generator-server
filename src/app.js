const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);
app.use(express.json());

module.exports = { app };
