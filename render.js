import chalk from "chalk";
const log = console.log;
const renderResult = (result, page, pointer) => {
  result.forEach((el, index) => {
    if (pointer == index) {
      log(
        chalk.green(
          `=> ${el.movieName}`,
          chalk.blue(`- ${el.release}`, chalk.yellow(`${el.language}`))
        )
      );
    } else {
      log(
        chalk.green(
          ` ${el.movieName}`,
          chalk.blue(`- ${el.release}`, chalk.yellow(`${el.language}`))
        )
      );
    }
  });
  if (pointer == 5) {
    log(chalk.blue.bgWhite("< Previous"));
  } else {
    log(chalk.blue("< Previous"));
  }

  if (pointer == 6) {
    log(chalk.blue.bgWhite("Next >"));
  } else {
    log(chalk.blue("Next >"));
  }

  log(chalk.cyan(`+++++++++++++++++++++ page ${page} +++++++++++++++`));
};

export { renderResult };
