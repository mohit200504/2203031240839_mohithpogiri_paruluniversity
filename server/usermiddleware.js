let jwt=require("jsonwebtoken");


module.exports=(req,res,next)=>{

    try{

        let token = req.header("x-token");

    if (!token){

        return res.send(" token error");

    }

    if(token){

       let decode= jwt.verify(token,"usersecurity");

       req.user=decode.user;

       next();


    }

    }
    catch(err){
        console.log(err)
    }



}