import React, { useContext, useRef } from 'react'
import "./login.css"
import {preventDefault} from "react"
import { loginCall } from '../../apiCalls';
import {AuthContext} from "../../context/AuthContext"
import { Link } from 'react-router-dom';


export default function Login() {

    const email=useRef();
    const password=useRef();

    const {user, isFetching, error, dispatch}=useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        console.log("Clicked")
        loginCall({email:email.current.value, password:password.current.value},dispatch);
    };

    // console.log(user)


    return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Pixel</h3>
                <span className="loginDesc">
                    Connect with the friends and the world on Pixel.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input 
                        placeholder='Email' 
                        required
                        type="email" 
                        ref={email} 
                        className="loginInput" 
                    />
                    <input 
                        placeholder='Password' 
                        required
                        minLength={6}
                        type="password" 
                        ref={password} 
                        className="loginInput" 
                    />
                    <button 
                        className="loginButton">
                        {isFetching ? "Loading ....." : "Log In"}
                    </button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">
                    <Link to= "/register" style={{textDecoration:"none", color:"white"}}>
                            Create a New Account
                    </Link>
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
