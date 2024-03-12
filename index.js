const { key, user, pass } = process.env;
const OS  = require( "opensubtitles.com");
const {renderResult} = require("./render.js");
const {getSubs} = require("./request.js");


// file process.argv[2];
// register user
  const os = new OS({
    apikey: key,
    useragent: "subget v0.0.1",
  });

  os.login({
    username: user,
    password: pass,
  })
    .then((response) => response)
    .catch(console.error);


module.exports = {
  os
}
renderResult(getSubs("The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"));
