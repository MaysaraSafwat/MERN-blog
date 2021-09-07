import React from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

export default function Navbar() {
    const user = false;
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-f"></i>
                <i className="navIcon fab fa-twitter"></i>
                <i className="navIcon fab fa-instagram"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="navItem">ABOUT</li>
                    <li className="navItem">
                    <Link to="/create" className="link">CREATE</Link>
                    </li>
                    {user && <li className="navListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="navRight">
            {user ? (
          <Link className="link" to="/updateProfile">
            <img
              className="navImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
                
          <i className="navSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
