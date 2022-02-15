import mongoose from 'mongoose';
const { Schema } = mongoose;

const homeOfficeSchema = new Schema ({
  lat: String,
  lng: String
});

const homeOffice = mongoose.model('HomeOffice', homeOfficeSchema);

module.exports = homeOffice;