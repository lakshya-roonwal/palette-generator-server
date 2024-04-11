const mongoose = require("mongoose");
// Todo : Remove Unneccesory Colors
const colorsSchema = new mongoose.Schema({
    primary: String,
    primary_content: String,
    primary_light: String,
    primary_dark: String,
    secondary: String,
    secondary_content: String,
    secondary_light: String,
    secondary_dark: String,
    foreground: String,
    background: String,
    border: String,
    success: String,
    warning: String,
    error: String,
    success_content: String,
    warning_content: String,
    error_content: String,
});

const paletteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Palette Name is Required"],
        },
        palette: colorsSchema,
        owner: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Palette =
    mongoose.models.Palette || mongoose.model("Palette", paletteSchema);

module.exports = Palette;
