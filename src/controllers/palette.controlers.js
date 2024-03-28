const { ApiResponse } = require("../utils/ApiResponse");

const getAllPalettes=async(req,res)=>{
    return res.status(200).json(
        new ApiResponse(200,"Done","Working Fine")
    )
}

module.exports={getAllPalettes};