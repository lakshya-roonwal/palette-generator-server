const Palette = require("../models/palette.model");
const { ApiResponse } = require("../utils/ApiResponse");
const User = require("../models/users.model");

const getAllPalettes = async (req, res) => {
    // Getting userId from req.auth
    // Check for User Id in palette collection if don't have any returns a empty array
    // return all the palettes found
    const { userId } = req.auth;
    return res
        .status(200)
        .json(new ApiResponse(200, { id: userId }, "Working Fine"));
};

const createPalette = async (req, res) => {
    // Getting the userId
    // Getting the data from the req.body and checking TODO : make the data checking better
    // Creating a palette and checking if the palette is create
    // When created successfully return a success msg with the created palette
    try {
        const {userId} = req.auth;
        const { data } = req.body;

        if (!data) {
            return res
                .status(400)
                .json(new ApiResponse(400, {}, "Bad Request."));
        }

        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json(new ApiResponse(404, {}, "User not found."));
        }

        const newPalette = new Palette({
            name: data.name,
            palette: data.palette,
            owner: userId,
        });

        const savedPalette = await newPalette.save();

        if (!savedPalette) {
            return res
                .status(500)
                .json(new ApiResponse(500, {}, "Failed to create palette."));
        }

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    savedPalette,
                    "Palette created successfully."
                )
            );
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json(new ApiResponse(500, {}, "Internal Server Error."));
    }
};

module.exports = { getAllPalettes, createPalette };
