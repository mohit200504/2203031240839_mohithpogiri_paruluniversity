
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

function User(){


let nav=useNavigate();
    let token = useSelector((s)=>{
        return s.token;

    })

    let [userdata,setuser]=useState();


    useEffect((


    )=>{


        if(token){
            let res= axios.get("http://localhost:4000/user",{headers:{
            "x-token":token
        }})

        console.log(res)
        }


        
    },[token])


    if(!token){
        return nav("login")
    }

    return (
        <h1>
            user
        </h1>
    )
}


export default User;
