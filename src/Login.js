import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  const login=(event)=>{
    event.preventDefault(); 
    // this stops refresh!!!!
  }

  return (
    <div className="login">
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" className="logologin" />
      </Link>
      <div className="logincontainer">
        <h1>Sign-in</h1>
        
        <form>
            <h5>
                E-mail
            </h5>
            <input type="text"></input>
            <h5>Password</h5>
            <input type="text"></input>
            <button className="Sign"><b>Sign In</b></button>
        </form>
        <p>By Signing-in you agree to Amazon's Conditions of Use&Sale.</p>
         <button className="account"><b>Create your Amazon Account</b></button>
      </div>
    </div>
  )
}

export default Login
