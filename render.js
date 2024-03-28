import chalk from "chalk";
const log = console.log;
const renderResult = (result, page, current) => {
  result.forEach((el,index) => {
    if(current == index){
      log(
        chalk.green(
          `=> ${el.movieName}`,
          chalk.blue(
            `- ${el.release}`,
            chalk.yellow(`${el.language}`)
          )
        )
      );
    }else{
      log(
        chalk.green(
          ` ${el.movieName}`,
          chalk.blue(
            `- ${el.release}`,
            chalk.yellow(`${el.language}`)
          )
        )
      );

    }
  });
  log(chalk.blue("< Previous"));
  log(chalk.blue("Next >"));

  log(chalk.cyan(`+++++++++++++++++++++ page ${page} +++++++++++++++`));
};

export {
  renderResult
}