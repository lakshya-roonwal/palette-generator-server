const express = require("express");
const {
    getAllPalettes,
    createPalette,
    updatePalette,
    deletePalette,
} = require("../controllers/palette.controlers");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
const { ApiResponse } = require("../utils/ApiResponse");

const router = express.Router();

router.get("/getallpalettes", ClerkExpressRequireAuth(), getAllPalettes);
router.post("/createpalette", ClerkExpressRequireAuth(), createPalette);
router.put("/updatepalette", ClerkExpressRequireAuth(), updatePalette);
router.delete("/deletepalette", ClerkExpressRequireAuth(), deletePalette);
// TODO : update , delete controller

// Error handling middleware
router.use((err, req, res, next) => {
    // Check if the error is related to authentication failure
    console.log(err);
    if (err.message === "Unauthenticated") {
        // Customize the response for authentication failure
        return res.status(401).json(
            new ApiResponse(
                401,
                {
                    msg: "You are not authorized to request this route",
                },
                "Unauthorized"
            )
        );
    }
    // For other errors, pass them to the default error handler
    next(err);
});

module.exports = router;
