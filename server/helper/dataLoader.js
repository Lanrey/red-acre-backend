import { addHometoOfficeLocation, addOfficetoLunchLocation } from '../controllers';
import fs from 'fs';
import appRoot from 'app-root-path';



const populateDB = async () => {
  try {
    let homeObj = JSON.parse(fs.readFileSync(appRoot + '/server/files/popeye-village-balluta.geojson'));
    
    let homeObjCoords =  homeObj.features[0].geometry.coordinates;

    for (const coords of homeObjCoords ) {
      await addHometoOfficeLocation(coords[0], coords[1])
    }
    
   
    let lunchObj = JSON.parse(fs.readFileSync(appRoot + '/server/files/lunch.geojson'));
    let lunchObjCoords = lunchObj.features[0].geometry.coordinates;
    

    for (const lunchCoords of lunchObjCoords ) {
      await addOfficetoLunchLocation(lunchCoords[0], lunchCoords[1]);
    }
    
    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}


export default populateDB;