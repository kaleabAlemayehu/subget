import chalk from "chalk";
const log = console.log;
const renderResult = (result, page) => {
  result.forEach((el) => {
    log(
      chalk.green.bgGray(
        ` ${el.movieName}`,
        chalk.blue.bgGray(
          `- ${el.release}`,
          chalk.yellow.bgGray(`${el.language}`)
        )
      )
    );
  });
  log(chalk.blue("< Previous"));
  log(chalk.blue("Next >"));

  log(chalk.cyan(`+++++++++++++++++++++ page ${page} +++++++++++++++`));
};

export {
  renderResult
}