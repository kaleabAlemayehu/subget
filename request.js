import {os} from "./configSetups.js";
import Subtitles from "./Model.js";


const getSubs = async (title) => {
  try {
    const response =  await os.subtitles({
      query: title,
    })

    if(!response || !response.data ){
      throw new Error(`Invaild response`);
    }
    const listOfSubs = [];
    response.data.forEach(el=> {
    listOfSubs.push(new Subtitles(el.id, el.attributes.language, el.attributes.feature_details.movie_name, el.attributes.release));
  });

  return listOfSubs;

  } catch (error) {
    console.error("error : ", error);
    return["this sucks"];
  }



};

const downloadSubs = async (id) => {
  const response = await os.download({
    file_id: id,
  });
  console.log(response);
};
export {
  getSubs,
  downloadSubs

}