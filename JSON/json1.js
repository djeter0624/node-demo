// fs require 
const fs = require("fs");

// JS series object
const series = {
    title: "Winnie the Pooh",
    author: "Christopher Robin"
}

// how to integrate JSON data and File System
const data = JSON.stringify(series);
fs.writeFile('json1.json', data, (err, data) =>{
    if(err)
    {
        console.error("an error occured");
        return false;
    }
    console.log("JSON file created");
});

// how to read the data stored in json1.json file
fs.readFile("json1.json", (err,data) =>{
    if(err)
    {
        console.error("an error has occured");
    }
    out = JSON.parse(data);
    console.log(out.author);
});

// how to edit the data in json1.json file
// user dataBuffer
const dataBuffer = (fs.readFileSync("json1.json").toString());

const info = JSON.parse(dataBuffer);

info.title = "Pooh Bear";

const infoJSON = JSON.stringify(info);
fs.writeFileSync("json1.json", infoJSON);

// how to make JS object and convert it into JSON String
const seriesJSON = JSON.stringify(series);
console.log(seriesJSON);

// how to take a JSON string and parse it into a JS Object
const parseData = JSON.parse(seriesJSON);
console.log(parseData.title);

