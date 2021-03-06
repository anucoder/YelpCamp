var express = require("express");
var router = express.Router({mergeParams : true});
var Campground = require("../models/Campgrounds");
var Comment = require("../models/Comments");



// ==========================
// COMMENTS ROUTES
// ==========================


//new route
router.get("/new",isLoggedIn,function(req,res)
{
    Campground.findById(req.params.id,function(err,campground){
        if(err)
        {
            console.log(err);
        }else
        {
            res.render("comments/new",{campground:campground});
        }
        
    });
     
});


//Create route
router.post("/",isLoggedIn,function(req,res){
 Campground.findById(req.params.id,function(err,campground){
        if(err)
        {
            console.log(err);
            res.redirect("/campgrounds");
        }else
        {
            console.log(campground);
            Comment.create(req.body.comment,function(err,comment)
            {
                if(err){ console.log(err);}
                else
                {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/'+campground._id);
                }
                
            });
        }
        
    });
});

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;