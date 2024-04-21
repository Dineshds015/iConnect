const mongoose=require('mongoose');

const ConnectionSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    connectionUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    connectionStatus:{
        type:String,
        required:true
    }
});

const Connection=mongoose.model("Connection",ConnectionSchema);

module.exports=Connection;

