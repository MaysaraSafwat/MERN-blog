import React from 'react'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sideTitle"> ABOUT </span>
               <img src="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=366&q=80" alt="sidebar-img"/>
               <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
           </div>
           <div className="sidebarItem">
               <span className="sideTitle">INTERESTS</span>
               <ul className="sideList">
                   <li className="sideListItem">Books</li>
                   <li className="sideListItem">Music</li>
                   <li className="sideListItem">Musice</li>
                   <li className="sideListItem">Crochet</li>
                   <li className="sideListItem">Cooking</li>

               </ul>
           </div>
           <div className="sidebarItem">
               <span className="sidebarTitle">FOLLOW US</span>
               <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-f"></i>
               <i className="sidebarIcon fab fa-instagram"></i>
               <i className="sidebarIcon fab fa-pinterest"></i>
               <i className="sidebarIcon fab fa-twitter"></i>
               </div>
        </div>
        </div>
    )
}
