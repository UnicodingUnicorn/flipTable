var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://fliptable:password@localhost:27018/fliptable");

var app = express();

var models = require("./models");
var api = require("./api")(mongoose, models);

app.use(express.static("views"));
app.use("/api", api);

app.listen(10201, function(){
	console.log("Listening");
});