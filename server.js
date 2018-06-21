var express = require("express");
var mongojs = require("mongojs");
var cheerio = require("cheerio");
var request = require("request");

var app = express();

var databaseUrl = "scraper";
var collections = ["scrappedData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});


app.get("/", function (req, res) {
    res.send("Hello world");
});


app.listen(3000, function () {
    console.log("App running on port 3000!");
});
