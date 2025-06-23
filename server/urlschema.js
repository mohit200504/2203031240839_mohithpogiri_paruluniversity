let mongoose=require("mongoose");


let urlSchema=mongoose.Schema({


    url:{
        type:String
    },

    shortkey:{
        type:String
    }
})


module.exports=mongoose.model("urls",urlSchema);
