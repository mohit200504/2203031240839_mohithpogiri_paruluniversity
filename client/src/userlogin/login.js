import React from "react";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch,  useSelector,  UseSelector } from "react-redux";
import { setToken } from "../store";

function Login(){


    let token=useSelector((s)=>{
        return s.token;

    });

let nav=useNavigate();
let dispatch=useDispatch();
    let [email,setemail]=useState();
    let [password,setpassword]=useState();


   async function login(){

        let res=await axios.post("http://localhost:4000/userlogin",{email,password});

        console.log(res)
        if (res){
            
           dispatch(setToken(res.data));
            setemail("");
            setpassword("");
            
        }
    }

    if(token){

        return nav("/user");
    }


    return (
        <div class="in">
          <h4>sign-in</h4>
            <input type="email" onChange={(e)=>{
                setemail(e.target.value)
            }}></input>
            <input type="text" onChange={(e)=>{
                setpassword(e.target.value)
            }}></input>

            <div>
                <button onClick={()=>{
                   login()
                }}>signin</button>
                <button  onClick={()=>{
                    nav("/userregister");
                }}>signup</button>
            </div>

        </div>
    )
}


export default Login;
