const User = require("../models/users.model");
const { ApiResponse } = require("../utils/ApiResponse");
const { ApiError } = require("../utils/ApiError");

const setUser = async (req, res) => {
    // getting data from clerk and checking the data
    // Saving user to data base
    // Returning the responce and the user data
    try {
        if (!req.body.data) {
            return res
                .status(400)
                .json(new ApiError(400, "Data Doen't exist", error));
        }
        const user = {
            _id: req.body.data.id,
            first_name: req.body.data.first_name,
            last_name: req.body.data.last_name,
            email: req.body.data.email_addresses[0].email_address,
        };

        const createdUser = await User.create(user);

        if (!createdUser) {
            console.log("Something went wrong");
            return res.status(400).json(new ApiError(400, "No User Created"));
        }

        return res
            .status(200)
            .json(
                new ApiResponse(200, createdUser, "User Created Successfully")
            );
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json(new ApiError(500, "Internal Server Error", error));
    }
};

module.exports = { setUser };
