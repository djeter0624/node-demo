//import module
const fs = require("fs");
var yargs = require('yargs');
array = [];

//creating a file
// to run the code in the terminal type: node example-fs.js
fs.writeFile("./assignment-2a-inputs.txt",
process.argv[2],
()=> {
    // check status
    fs.stat(""+process.argv[2] +".txt", function (err, stats) {
        if (err)
        throw err;
        if (stats.isFile()) {
            console.log('Enter a new file name');
        }
        else{
            //creating a file
            // to run the code in the terminal type: node example-fs.js
            fs.writeFile("./"+ process.argv[2] +".txt",
            "You are awesome",
            ()=> {console.log("User file created")
            });
            array.push(process.argv[2]);
        }
    });

    for (let step = 0; step < array.length; step++) {
        console.log(array[step]);
    }

});



// // append
// // append data to file
// fs.appendFile("./assignment-2a-inputs.txt", process.argv[2], 'utf8',
//     // callback function
//     function(err) { 
//         array = process.argv[2].toString().split("\n");
//         if (err) throw err;
//         // if no error
//         console.log("Data is appended to file successfully.")
// });

// // read inpur into array
// var array = fs.readFile("assignment-2a-inputs.txt", function(err, data) {
//     if(err) throw err;
//     array = data.toString().split("\n");
//     for(i in array) {
//         console.log(array[i]);
//     }
// });

// yargs
//console.log(yargs.argv);