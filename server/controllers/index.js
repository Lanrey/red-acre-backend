import homeOffice from '../models/home-office';
import officeLunch from '../models/office-lunch';

exports.addHometoOfficeLocation = async (lng, lat) => {
  try {
    const homeOfficeMap = await homeOffice.create({lng, lat});
    console.log('<><>', homeOfficeMap);
  } catch (error) {
    console.log(error);
  }
}

exports.addOfficetoLunchLocation = async (lng, lat) => {
  try {

    const officeLunchMap = await officeLunch.create({lng, lat});
    console.log('<><>', officeLunchMap);
  } catch (error) {
    console.log(error);
  }
}