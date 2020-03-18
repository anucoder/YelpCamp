var mongoose = require("mongoose");

var CampgroundSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String,
    comments :[{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Comment"
    }]
});

// defining model
var Campground = mongoose.model("Campground",CampgroundSchema);

module.exports = Campground;
