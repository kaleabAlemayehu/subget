import { renderResult } from "./render.js";
import { getSubs, downloadSubs } from "./request.js";

// file process.argv[2];
// register user
let page = 1;
let pointer = 0;
const pages = [];
const onPress = (ch, key) => {
  console.clear();
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }
  switch (key.name) {
    case "down": {
      if (pointer >= 6) {
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
    case "return": {
      if (pointer == 5) {
        page = prevPage(page);
      } else if (pointer == 6) {
        page = nextPage(page);
      } else {
        downloadSubs(pages[page - 1][pointer]);
      }
      break;
    }
    default: {
      pointer = pointer;
      break;
    }
  }
  renderResult(pages[page - 1], page, pointer);
};
const nextPage = (page) => {
  if (page >= pages.length) {
    page = page;
  } else {
    page++;
  }
  console.log(`the page is : ${page}`);
  return page;
};

const prevPage = (page) => {
  if (page <= 1) {
    page = page;
  } else {
    page--;
  }
  return page;
};
const pagenation = (listOfSubs) => {
  for (let i = 0; i < Math.floor(listOfSubs.length / 5); i++) {
    pages.push(listOfSubs.slice(i * 5, i * 5 + 5));
  }
  return pages;
};

const ctrl = async () => {
  try {
    const listOfSubs = await getSubs(
      "The Matrix (1999) 1080p BrRip x264 - 1.85GB - YIFY"
    );
    const pages = pagenation(listOfSubs);
    renderResult(pages[page - 1], page, pointer);

    process.stdin.on("keypress", onPress);
  } catch (error) {
    console.error(error);
  }

  // console.log(pages);
};

ctrl();
