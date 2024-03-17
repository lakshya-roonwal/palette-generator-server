const mongoose = require("mongoose");

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('connected db');
    } catch (err) {
        console.log('db error', err);
    }
};
module.exports=connectToDB;