const mongoose = require("mongoose");
require("dotenv").config({path: '../../.env'});
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.mongodbURI, {
    useNewUrlParser: true,
   // useCreateIndex: true,
    useUnifiedTopology: true,
   // useFindAndModify: false,
  })
  .then((res) => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log({ err });
    console.log("Not connected");
  });

module.exports = { mongoose };