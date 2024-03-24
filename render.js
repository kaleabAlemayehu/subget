import chalk from "chalk";
const log = console.log;
const renderResult = (result) => {
  result.forEach(el => {
    log(chalk.green.bgGray(` ${el.movieName}`,chalk.blue.bgGray(`- ${el.release}`, chalk.red.bgGray(`${el.language}`)
    )));
  });
};

export {
  renderResult
}