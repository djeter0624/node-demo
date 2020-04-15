// fs require
const fs = require('fs');

// fs open
// open a file 
fs.open("example-path.txt","r+", (err, response) =>{
    if(err)
    {
        console.error("Error occured");
        // stop the code from continuing if an error occurs
        return false;
    }
    console.log("File opened successfully!");
});

// fs get (stat)
// get information about the file
fs.stat("example-path.txt", (err, response) =>{
    if(err)
    {
        console.error("Error occured");
        // stop the code from continuing if an error occurs
        return false;
    }
    console.log(response);
});

// fs write
// writes a txt file
// using synchronous method doesn't have a callback
fs.writeFileSync("fs-file.txt", "Hello fs");
console.log("synchronous file write completed");

// fs write
// writes a txt file
fs.writeFile("async-fs.txt", "this is an Asynchronous file", (err) =>{
    if(err)
    {
        console.error("An error occured");
        return false;
    }
    console.log("asynchronous file created sucessfully!");
});

// fs read
// read a file
fs.readFile("async-fs.txt", (err, data) =>{
    if(err)
        {
            console.error("An error occured");
            return false;
        }
    else
    {
        console.log(data.toString());
    }
});

// fs rename
// rename a file
fs.rename("example-path.txt", "path-example.txt", (err, data) =>{
    if(err)
    {
        console.error("An error occured");
        return false;
    }
    console.log("file name was changed successfully!");
});

// fs append
// add new data to a file
fs.appendFile("path-example.txt", "\n this message is from the append file fs operator", (err, data) =>{
    if(err)
    {
        console.error("An error occured");                
        return false;
    }      
    console.log("data appended successfully!");  
});


// fs delete (unlink)
// delete a file
fs.unlink("async-fs1.txt", (err,data) =>{
    if(err)
    {
        console.error("An error occured");                
        return false;
    }      
    console.log("file deleted successfully!");  
});





