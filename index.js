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
const pagenation =  (listOfSubs) => {

  const pages = [];
  let page = 0;

  for (let i = 0; i < Math.floor(listOfSubs.length / 5); i++) {
    pages.push(listOfSubs.slice(i * 5, i * 5 + 5));

  }
  return pages;
}
const ctrl = async () => {
  try{
    let page = 0;
    let current = 0;
    const listOfSubs = await getSubs(
      "The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"
      );
      const pages =  pagenation(listOfSubs);
      
      renderResult(pages[page], page, current);

  }catch(error) {
    console.error(error);
  }

  // console.log(pages);
}

  


ctrl();
    export{os}