//mongodb and mongoose connection configuration
const mongoose = require("mongoose");
const config = require("../config/config");
const dotenv = require("dotenv");
dotenv.config();

// console.log(config.mongoURI);
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  maxPoolSize: 100, // Adjust based on expected concurrency and server capacity
  connectTimeoutMS: 5000, // Adjust based on network conditions
  socketTimeoutMS: 15000, // Adjust based on expected response time
  family: 4,
  serverSelectionTimeoutMS: 10000, // Adjust based on deployment complexity
  heartbeatFrequencyMS: 3000,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

module.exports = connection;
