/* ************************************* */
// fs: handles the file systems
/* ************************************* */

//import module
const fs = require("fs");

//creating a file
// to run the code in the terminal type: node example-fs.js
fs.writeFile("./example-write-file.txt",
"Hello World!!!",
()=> {console.log("Write Created...")
});

//callback is the 3rd paramerter
// note: writeFileSync will block your js thread



// reading content from the file
fs.readFile("./example-write-file.txt",
"utf-8", (err, data)=>{
console.log(data)
});


// if you want to write and then read the file, put it in the callbakc
fs.writeFile("./example-write-file.txt",
"Hello World!!!",
()=> {console.log("Write Created...")
    fs.readFile("./example-write-file.txt",
    "utf-8", (err, data)=>{
        console.log(data)
    });
});

// set timeout to create the file
setTimeout(()=>{
    fs.writeFile("./example-write-file.txt",
    "Hello World!!!",
    ()=> {console.log("Write Created...")
        fs.readFile("./example-write-file.txt",
        "utf-8", (err, data)=>{
            console.log(data)
        });
    });
}, 0);



// note: you can create your own cli from nodejs



