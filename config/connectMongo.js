const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Could not connect mongodb");
    process.exit(1);
  }
}

module.exports = connectDB;