import { os } from "./configSetups.js";
import Subtitles from "./Model.js";
import https from "https";
import fs from "fs";

const getSubs = async (title) => {
  try {
    const response = await os.subtitles({
      query: title,
    });

    if (!response || !response.data) {
      throw new Error(`Invaild response`);
    }
    const listOfSubs = [];
    response.data.forEach((el) => {
      listOfSubs.push(
        new Subtitles(
          el.id,
          el.attributes.language,
          el.attributes.feature_details.movie_name,
          el.attributes.release
        )
      );
    });

    return listOfSubs;
  } catch (error) {
    console.error("error : ", error);
    return ["this sucks"];
  }
};

const downloadSubs = async (sub) => {
  const response = await os.download({
    file_id: sub.id,
  });
  const file = fs.createWriteStream(response.file_name);
  const request = https.get(response.link, (res) => {
    res.pipe(file);
    file.on("finish", () => {
      file.close();
      console.log("Downloaded successfully");
    });
  });
};

export { getSubs, downloadSubs };
