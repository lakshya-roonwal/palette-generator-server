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

// Routes For the Application
// TODO : use cors and make sure that these user routes are only requested by clerk
app.use("/api/v1/user", require("./routes/user.routes"));
app.use("/api/v1/palette", require("./routes/palette.routes"));

module.exports = { app };
