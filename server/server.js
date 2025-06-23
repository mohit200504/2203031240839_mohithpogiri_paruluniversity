let express=require("express");
let cors=require("cors");
let mongoose=require("mongoose");
let jwt=require("jsonwebtoken");
const userSchema = require("./userSchema");
const usermiddleware = require("./usermiddleware");

let app=express();

app.use(express.json());
app.use(cors({origin:"*"}));

mongoose.connect("mongodb+srv://2203031240839:mohithdb@cluster0.ta3ge.mongodb.net/test1")
.then(()=>{
    console.log("db connected");
})


app.post("/userregister",async(req,res)=>{

    try{

        let {name,email,password}=req.body;

        let user= await userSchema.findOne({email});

        if (user){
            return res.send("user already exist");
        }

        if(!user){

            let newuser=new userSchema({
                name,email,password
            });

            await newuser.save();

            if (newuser){
                res.send("user registred succesfully");
            }

        }

    }
    catch(err){

        console.log(err)
    }
});



app.post("/userlogin",async(req,res)=>{

    try{

        let {email,password}=req.body;

        let userf=await userSchema.findOne({email});

        if(!userf){
            return res.send("user notfound")
        }

        if(userf.password!=password){
            return res.send("incorrect password");
        }

        if(userf){

            payload={
                user:{
                    id:userf.id
                }
            }

    jwt.sign(payload,"usersecurity",{expiresIn:20000000},(err,token)=>{

        res.send(token);

    })


        }



    }
    catch(err){
        console.log(err)
    }
})



app.get("/user",usermiddleware,async(req,res)=>{



    let {id}=req.user;

    let user=await userSchema.findById(id);

    if(user){

        return res.json(user);
    }


})



app.post("/url",usermiddleware,async(req,res)=>{


    let {url,shortkey}=req.body;

    



    


})





app.listen(4000);
