import React from 'react';
import "../style.css";

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-f"></i>
                <i className="navIcon fab fa-twitter"></i>
                <i className="navIcon fab fa-instagram"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navItem">HOME</li>
                    <li className="navItem">ABOUT</li>
                    <li className="navItem">CREATE</li>
                    <li className="navItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img className="navImg" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="avatar"/>
                <i className="navSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
