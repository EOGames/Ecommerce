const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to Mongodb Database ${conn.connection.host}`.bgWhite.red);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
}
module.exports = connectDB;