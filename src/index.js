require("dotenv").config();
const { app } = require("./app");
const connectToDB = require("./db");
const port = process.env.PORT || 8000;

connectToDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, (req, res) => {
    console.log(`Server successfully started on http://localhost:${port}`);
});
