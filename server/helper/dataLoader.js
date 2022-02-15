import { addHometoOfficeLocation, addOfficetoLunchLocation } from '../controllers';
import fs from 'fs';


const populateDB = async () => {
  try {

    let homeObj = JSON.parse(fs.readFileSync('../files/popeye-village-balluta.geojson'));
    console.log(homeObj);


    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default populateDB;