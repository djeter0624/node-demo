// don't need extension (.js)
// from a file
const {add} = require("./calculator");

// import lodash write _ istead of lodash
const _ = require("lodash");

// these will not work because they have no methods inside
// // from a folder
// const {} = require("./utils");

// // file from a folder
// const {} = require("./utils/notepad");

// // can only have one add function not 2
// function add()
// {
//     console.log("2342304230934");
// }


console.log(add(1,2));


// lodash methods
_.camelCase("an apple fell from the tree.")

console.log(_.camelCase("an apple fell from the tree."));




