import chalk from "chalk";
const log = console.log;
const renderResult = (result) => {
  
  log(chalk.blue(result));
};

export {
  renderResult
}