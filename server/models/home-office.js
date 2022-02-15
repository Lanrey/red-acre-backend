import mongoose from 'mongoose';

const HomeOfficeSchema = new mongoose.Schema({
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

const homeOffice = mongoose.model('balluta-office', HomeOfficeSchema)
module.exports = homeOffice
