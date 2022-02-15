import mongoose from 'mongoose';
const { Schema } = mongoose;

const officeLunchSchema = new Schema ({
  lat: String,
  lng: String
});

const OfficeLunch = mongoose.model('OfficeLunch', officeLunchSchema);

module.exports = OfficeLunch;