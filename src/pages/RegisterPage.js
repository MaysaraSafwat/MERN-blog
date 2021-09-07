import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
           <form className="registerForm">
             <label>Username :</label>
              <input className="registerInput" type="text" placeholder="enter your username"/>
              <label>Email :</label>
              <input className="registerInput" type="email" placeholder="enter your email"/>
              <label>Password : </label>
              <input className="registerInput" type="password" placeholder="enter your password"/>
              <button className="registerBtn">REGISTER</button>
              <button className="registerLoginBtn"><Link to="login" className="link">Already Have an account? Register</Link></button>

           </form>
        </div>
    )
}
