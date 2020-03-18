var mongoose = require("mongoose");
var Campground = require("./models/Campgrounds");
var Comment = require("./models/Comments");

var data = [{
    name :"Cloud's rest",
    image : "https://www.nps.gov/mora/planyourvisit/images/OhanaCampground2016_CMeleedy_01_web.jpeg?maxwidth=1200&maxheight=1200&autorotate=false",
    description : "blahh blah blahh",
    }
    ,
    {
    name :"Cloud's rest",
    image : "https://www.nps.gov/yell/planyourvisit/images/ndh-yell-7210_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
    description : "blahh blah blahh",
    },
    {
    name :"Cloud's rest",
    image : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/mimosa-rocks-national-park/aragunnu-campground/aragunnu-campground-01.jpg",
    description : "blahh blah blahh",
    }
    ]

function seedDB(){
    Campground.remove({},function(err){
        if(err)
        {
            console.log(err);
        }
    //     else
    //     {
    //         console.log("removed campgrounds!");
    //         data.forEach(function(seed)
    //         {
    //             Campground.create(seed,function(err,campground)
    //             {
    //                 if(err)
    //                 {
    //                     console.log(err);
    //                 }
    //                 else
    //                 {
    //                     console.log("added a campground");
    //                     Comment.create(
    //                         {
    //                             text : "I wish internet was there",
    //                             author : "Homer"
    //                         }, function(err,comment){
    //                             if(err){}
    //                             else
    //                             {
    //                                 campground.comments.push(comment);
    //                                 campground.save();
    //                                 console.log("added a comment");
    //                             }
                                
    //                         });
                        
    //                 }
    //             });
    //         });
    //     }
     });
}


module.exports = seedDB;


