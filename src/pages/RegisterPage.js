import React from 'react'

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
              <button className="registerLoginBtn">Already Have an account? Register</button>

           </form>
        </div>
    )
}
