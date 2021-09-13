import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import axios from "axios";

export default function UpdateProfPage() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleSubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(`/user/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
   
    return (
        <div className="updateProf">
            <div className="updateProfWrapper">
                <div className="profSettings">
                    <span className="updateTitle"> Update Your Title</span>
                    <span className="deleteProf" > Delete Your Account</span>
                </div>
                <form className="updateForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="updatePP">
                      <img
                       src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                       alt=""
                        />
                        <label htmlFor="fileInput"><i class="updatePPIcon far fa-image"></i></label>
                        <input type="file" id="fileInput" className="updatePPInput" style={{display : "none"}} onChange={e => setFile(e.target.files[0])}/>
                    </div>
                    <label>Usernmae</label>
                    <input type="text" placeholder={user.username}name="username" 
                    onChange={e=> setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email"
                    onChange={e=> setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input type="password" name="password"
                    onChange={e=> setPassword(e.target.value)}
                     />
                    <button className="updateProfBtn" type="submit">Update</button>
                    {success && <span>Profile has Updated Successfuly</span>}
                    
                </form>
            </div>
            
        </div>
    )
}
