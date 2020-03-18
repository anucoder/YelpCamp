var express = require("express");
var router = express.Router({mergeParams : true});
var Campground = require("../models/Campgrounds");




router.get("/",function(req,res){
    Campground.find(function(err,allCamps)
    {
        if(err){
            console.log("ERROR"); }
        else {
            //console.log(allCamps);
            res.render("campgrounds/index",{campgrounds:allCamps, currentUser : req.user});   }
    });
});



router.get("/new",function(req,res)
{
    res.render("campgrounds/new");
});

router.get("/:id",function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(foundCampground);
            res.render("campgrounds/show",{campground:foundCampground});
        }
         
    });
       
});

router.post("/",function(req,res){
    //res.send("you hit the post route")
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.desc;
    
    var newCampground = {name:name,image:image,description:desc};
    //campgrounds.push(newCampground);
    Campground.create(newCampground, function(err,cat)
    {
        if(err)
        {
            console.log("Something went WRONG");
        }
        else
        {
            console.log(cat);
        }
});
    
    res.redirect("/campgrounds");
});

module.exports = router;