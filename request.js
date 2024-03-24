import {os } from "./index.js"
import Subtitles from "./Model.js";


const getSubs = async (title) => {
  try {
    const response =  await os.subtitles({
      query: title,
    })

    if(!response || !response.data ){
      throw new Error(`Invaild response`);
    }
    const listOfSubtitles = [];
    response.data.forEach(el=> {
    listOfSubtitles.push(new Subtitles(el.id, el.attributes.language, el.attributes.feature_details.movie_name, el.attributes.release));
  });

  return listOfSubtitles;

  } catch (error) {
    console.error("error : ", error);
    return["this sucks"];
  }

 

};

const downloadSubs = (id) => {
  
}
export {
  getSubs,
  downloadSubs

}