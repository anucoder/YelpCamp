var mongoose = require("mongoose");
var express = require("express");
var app = express();
//var bodyParser = require("body-parser");
var Campground = require("./models/Campgrounds");
var Comment = require("./models/Comments");
var User = require("./models/User");
var seedDB = require("./seed");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


var commentRoutes = require("./routes/comments"),
    campgroundsRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");
    

// PASSPORT CONFIG
app.use(require("express-session")({
    secret:"Once again Rusty wins the cutest dog!",
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost/yelp_app");  //Connecting to mongodb
// seedDB();

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

//Rotes
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundsRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Yelpcamp server is running");
});