var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/User");

// ==============
//   ROUTES
// ==============

router.get("/",function(req,res){
    res.render("landing");
});


//show register form
router.get("/register",function(req, res) {
    res.render("register");
})

//handles signup logic
router.post("/register",function(req, res) {
    var newUser = new User({username:req.body.username});
    User.register(newUser, req.body.password, function(err, user)
    {
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/campgrounds");
        });
    });
});

//show login form
router.get("/login",function(req, res) {
    res.render("login");
})

//handles login logic
 router.post("/login", isErrorInLogin,//passport.authenticate("local",
//     {
//     succesRedirect : "/campgrounds",
//     failureRedirect : "/login"
    
//     }),
    function(req, res) {
});


//logout
router.get("/logout",function(req,res)
{
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    res.redirect("/login");
}

function isErrorInLogin(req, res, next) {
    // call passport authentication passing the "local" strategy name and a callback function
    passport.authenticate('local', function (error, user, info) {
      // this will execute in any case, even if a passport strategy will find an error
      // log everything to console
       console.log(error);
       console.log(user);
      console.log(info);

      if (error) {
          console.log(error);
        res.status(401).send(error);
      } else if (!user) {
          console.log(info);
        res.status(401).send(info);
      } else if(req.isAuthenticated())
         {
        return next();
        }
    else {
        console.log(info); 
        next();
      }

      res.status(401).send();
    })(req, res);
  }
  
  
  module.exports = router;