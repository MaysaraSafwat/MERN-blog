import React from 'react'

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
              <button className="loginRegisterBtn">Don't Have an account? Register</button>

           </form>
        </div>
    )
}
