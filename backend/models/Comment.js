const mongoose=require('mongoose');

const CommentSchema=new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    commentDate:{type:Date}
});

const Comment=mongoose.model("Comment",CommentSchema);

module.exports=Comment;

