import mongoose from 'mongoose';

const officeLunchSchema = new mongoose.Schema({
  lng: {
    type: String,
    required: [true, 'Please add a longitude']
  },
  lat: {
    type: String,
    required: [true, 'Please add a latitude']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const officeLunch = mongoose.model('office-lunch', officeLunchSchema)
module.exports = officeLunch
