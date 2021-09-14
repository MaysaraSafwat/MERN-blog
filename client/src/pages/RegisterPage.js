import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErr(false);
        try {
            const res = await axios.post("/auth/register", {
              username,
              email,
              password,
            });
            res.data && window.location.replace("/login");
          } catch (err) {
            setErr(true);
          }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
           <form className="registerForm" onSubmit={handleSubmit}>
             <label>Username :</label>
              <input className="registerInput" type="text" placeholder="enter your username"
                     onChange={(e)=> setUsername(e.target.value)}
              />
              <label>Email :</label>
              <input className="registerInput" type="email" placeholder="enter your email"
                     onChange={(e)=> setEmail(e.target.value)}
              />
              <label>Password : </label>
              <input className="registerInput" type="password" placeholder="enter your password"
                     onChange={(e)=> setPassword(e.target.value)}
              />
              <button className="registerBtn">REGISTER</button>
              <button type="submit" className="registerLoginBtn"><Link to="login" className="link">Already Have an account? Login</Link></button>
              {err && <span style={{color:"red", marginTop:"10px"}}>Ops! Something went wrong. Try Again please.
              </span>}
           </form>
        </div>
    )
}
