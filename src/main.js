
const { Command } = require('commander');
let{
  convertTemperature
} = require("../src/controller");

const program = new Command();
program.version('0.0.1');

program
  .option('-t, --temperature <temperature>', '')
  .option('-s, --scale-conversion <scale-conversion>', '');

program.parse(process.argv);

const options = program.opts();

console.log(convertTemperature(options.temperature,options.scaleConversion));





