const chalk = require("chalk");
const log = console.log;
const renderResult = (result) => {
  log(chalk.blue(result));
};
module.exports = renderResult;
