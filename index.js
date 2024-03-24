import dotenv from "dotenv";
dotenv.config();
import OS from "opensubtitles.com"
import {renderResult} from "./render.js";
import {getSubs} from "./request.js";


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


    renderResult(await getSubs("The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"));
    
    export{os}