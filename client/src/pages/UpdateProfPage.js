import React from 'react'

export default function UpdateProfPage() {
    return (
        <div className="updateProf">
            <div className="updateProfWrapper">
                <div className="profSettings">
                    <span className="updateTitle"> Update Your Title</span>
                    <span className="deleteProf"> Delete Your Account</span>
                </div>
                <form className="updateForm">
                    <label>Profile Picture</label>
                    <div className="updatePP">
                      <img
                       src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                       alt=""
                        />
                        <label htmlFor="fileInput"><i class="updatePPIcon far fa-image"></i></label>
                        <input type="file" id="fileInput" className="updatePPInput" style={{display : "none"}}/>
                    </div>
                    <label>Usernmae</label>
                    <input type="text" placeholder="Maysora" name="username" />
                    <label>Email</label>
                    <input type="email" placeholder="Maysora@gmail.com" name="email"/>
                    <label>Password</label>
                    <input type="password" name="password" />
                    <button className="updateProfBtn">Update</button>
                    
                    
                </form>
            </div>
            
        </div>
    )
}
