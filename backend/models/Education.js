const mongoose=require('mongoose');

const EducationSchema=new mongoose.Schema({
    school:{
        type:String,
        required:true,
    },
    degree:{
        type:String,
        required:true,
    },
    fieldOfStudy:{
        type:String,
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

const Education=mongoose.model("Education",EducationSchema);

module.exports=Education;

