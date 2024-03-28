import dotenv from "dotenv";
import OS from "opensubtitles.com";
import keypress from "keypress";
keypress(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.resume();

dotenv.config();
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

export { os };
