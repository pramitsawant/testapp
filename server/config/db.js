const mongoose = require("mongoose");
require("dotenv/config");
const options = {  
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true  
};

mongoose.connect(process.env['MONGO_DB_URI'], options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);