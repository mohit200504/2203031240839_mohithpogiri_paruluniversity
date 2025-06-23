let mongoose=require("mongoose");


let userSchema=mongoose.Schema({

    name:{
        type:String,
    
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});


module.exports=mongoose.model("userdata",userSchema);

