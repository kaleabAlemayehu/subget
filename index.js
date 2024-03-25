import dotenv from "dotenv";
dotenv.config();
import OS from "opensubtitles.com"
import {renderResult} from "./render.js";
import { getSubs, downloadSubs } from "./request.js";

// file process.argv[2];
// register user
const os = new OS({
  apikey: process.env.key,
  useragent: "subget v0.0.1",
});

os.login({
  username: process.env.user,
  password: process.env.pass,
})
  .then((response) => response)
  .catch(console.error);

(async () => {
  const pages = [];
  let page = 0;
  const listOfSubtitles = await getSubs(
    "The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"
  );
  for (let i = 0; i < Math.floor(listOfSubtitles.length / 5); i++) {
    pages.push(listOfSubtitles.slice(i * 5, i * 5 + 5));
  }
  renderResult(pages[page], page);

  // console.log(pages);
})();

  



    
    export{os}