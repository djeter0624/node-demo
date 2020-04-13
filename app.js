// date from date.json
var date = require('./date.js');

console.log('The date and time are currently: ' +  date());


// npm install chalk
chalk = require('chalk');
console.log(chalk.green('I am a green line ' +
chalk.blue.underline.bold('with a bule substring') + ' that becomes green again!'));


// command line arguments

// argv
console.log(process.argv[2]);

var yargs = require('yargs');

// yargs
console.log(yargs.argv);
