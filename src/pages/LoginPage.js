import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
           <form className="loginForm">
              <label>Email :</label>
              <input className="loginInput" type="email" placeholder="enter your email"/>
              <label>Password : </label>
              <input className="loginInput" type="password" placeholder="enter your password"/>
              <button className="loginBtn">LOGIN</button>
              <button className="loginRegisterBtn"><Link className="link" to="/register">Don't Have an account? Register</Link></button>

           </form>
        </div>
    )
}
