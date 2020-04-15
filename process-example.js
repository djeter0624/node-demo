// // process
// console.log(process);

// // to let the user set the arguments use args
// console.log(process.argv);

// // to get the arguments
// // all argv are strings
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);


// // adding 2 user inputs
// // must parseInt or parseFloat becasue argv is a string and we must convert it
// const a = parseFloat(process.argv[2]);
// const operator = process.argv[3];
// const b = parseFloat(process.argv[4]);

// if(operator === "+")
// {
//     console.log(a + b);
// }

// if(operator === "-")
// {
//     console.log(a - b);
// }

// yargs -  can write names for your parameters
// --name=danielle --company=home
const argV =  require('yargs').argv;
console.log(argV);