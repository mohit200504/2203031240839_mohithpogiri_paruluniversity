import React from "react";
import { useState } from "react";
import "./regi.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";



function Register(){

    let nav=useNavigate();



    let [name,setname]=useState();
    let [email,setemail]=useState();
    let [password,setpassword]=useState();


   async function register(){

        let res=await axios.post("http://localhost:4000/userregister",{name,email,password});

        console.log(res)
        if (res){
            alert(res.data);
            setname("");
            setemail("");
            setpassword("");

        }
    }



    return (
        <div class="in">
            <h4>sign-up</h4>
            <input type="text" onChange={(e)=>{
                setname(e.target.value)
            }}></input>
            <input type="email" onChange={(e)=>{
                setemail(e.target.value)
            }}></input>
            <input type="text" onChange={(e)=>{
                setpassword(e.target.value)
            }}></input>

            <div>
                <button onClick={()=>{
                    register()
                }}>signup</button>
                <button onClick={()=>{
                    nav("/userlogin")
                }}>signin</button>
            </div>

        </div>
    )
}


export default Register;
