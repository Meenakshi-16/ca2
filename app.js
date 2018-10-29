var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Form = require("./models/form");




mongoose.connect("mongodb://localhost/ca2", {useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/new", function(req,res){
    res.render("home");
});
app.get("/", function(req,res){
    Form.find({}, function(err,newdata){
        if(err)
            console.log(err);
        else{
            res.render("show",{form: newdata});
        }
    });
});

app.post("/",function(req,res){
    Form.create(req.body.form, function(err, newdata){
		if(err){
			res.render("home");
		}else{
			res.redirect("/");
		}
	});
});
   


app.listen(5000, function(req,res){
    console.log("server started");
});