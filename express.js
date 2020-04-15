// express require
const express = require("express");

// create object that implements express
const app = express();

// add a port
const port = 6500;

// path require
path = require("path");

// fs require
const fs = require("fs");

// to send an html file as the response
app.get("/", (req,res) =>{
    console.log(req);
    // res.send("Hello World!");
    res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/", (req,res) =>{
    console.log(req);
    // res.send("POST Hello World!");
    res.sendFile(path.join(__dirname, "person.json"));

    // to send to contents of the file
    // we need to read the file first with fs
    fs.readFile("person.json", "utf-8", (err, data) => {
        res.send(data);
        // to send as a JSON object
        //res.send(JSON.parse(data));
    });
});

// how to make a server listen to a port
app.listen(port, (err) => {
    if(err)
    {
        console.error("an error occured");
        return false;
    }
    console.log("server is running on port:\t" + port);
});

