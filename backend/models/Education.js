const mongoose=require('mongoose');

const EducationSchema=new mongoose.Schema({
    School:{
        type:String,
        required:true,
    },
    Degree:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        required:false,
    },
    endDate:{
        type:Date,
        required:false,
    },
    description:{
        type:String,
        required:false,
    }
});

const Education=mongoose.model("Experience",EducationSchema);

module.exports=Education;

