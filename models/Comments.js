var mongoose = require("mongoose");

var CommentsSchema = new mongoose.Schema({
    text : String,
    author :
    {
        id : {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username : String
    }
 });

// defining model
var Comment = mongoose.model("Comment",CommentsSchema);

module.exports = Comment;