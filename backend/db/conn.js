const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb+srv://admin:"+process.env.MONGO_PASSWORD+"@iconnectcluster.negtvp6.mongodb.net/?retryWrites=true&w=majority&appName=iConnectCluster",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then((x)=>{
    console.log("Connected to mongo!");
}).catch((err)=>{
    console.log("Error occured while connecting to mongo");
    console.log(err);
});