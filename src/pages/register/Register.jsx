import React from 'react'
import "./register.css"

export default function Register() {
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
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">Log in to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
