const mongoose = require("mongoose");

const colorsSchema = new mongoose.Schema({
    primary: String,
    primary_content: String,
    primary_light: String,
    primary_dark: String,
    secondary: String,
    secondary_content: String,
    secondary_light: String,
    secondary_dark: String,
    neutrals: String,
    foreground: String,
    background: String,
    border: String,
    copy: String,
    copy_light: String,
    copy_lighter: String,
    utility: String,
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
            required: true,
            default: "Untitled Palette",
        },
        palette: colorsSchema,
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Palette =
    mongoose.models.Palette || mongoose.model("Palette", paletteSchema);

module.exports = Palette;
