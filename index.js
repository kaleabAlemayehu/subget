import { renderResult } from "./render.js";
import { getSubs, downloadSubs } from "./request.js";

// file process.argv[2];
// register user

const pagenation = (listOfSubs) => {
  const pages = [];

  for (let i = 0; i < Math.floor(listOfSubs.length / 5); i++) {
    pages.push(listOfSubs.slice(i * 5, i * 5 + 5));
  }
  return pages;
};

const ctrl = async () => {
  try {
    let page = 0;
    let pointer = 0;
    const listOfSubs = await getSubs(
      "The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"
    );
    const pages = pagenation(listOfSubs);
    renderResult(pages[page], page, pointer);

    process.stdin.on("keypress", function (ch, key) {
      console.clear();
      if (key && key.ctrl && key.name == "c") {
        process.stdin.pause();
      }
      switch (key.name) {
        case "down": {
          if (pointer > 6) {
            pointer = pointer;
          } else {
            pointer++;
          }
          break;
        }

        case "up": {
          if (pointer < 1) {
            pointer = pointer;
          } else {
            pointer--;
          }
          break;
        }
        default: {
          pointer = pointer;
          break;
        }
      }
      renderResult(pages[page], page, pointer);
    });
  } catch (error) {
    console.error(error);
  }

  // console.log(pages);
};

ctrl();
