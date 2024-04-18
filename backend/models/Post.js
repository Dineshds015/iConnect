const mongoose=require('mongoose');
const { post } = require('../routes/profile');

const PostSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        required:true
    },
    images:[
        {
            type:String,
            required:false
        }
    ],
    postDate:{type:Date}
});

const Post=mongoose.model("post",PostSchema);

module.exports=Post;