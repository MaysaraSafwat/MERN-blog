import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';


export default function SinglePostDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [update , setUpdate] = useState(false)
    const user = useContext(Context)
    const PF = "http://localhost:5000/images/";
   

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/post/" + path);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.description);
        };
        getPost();
      }, [path]);
    
    const handleDelete = async()=>{
      try{
           await axios.delete(`/post/${post._id}` ,
            {data : {username : user.user.username}}
            );
           window.location.replace("/")
       }catch(err){}
    }  

    const handleUpdate = async()=>{
    try{
        await axios.put(`/post/${post._id}` ,
        {username : user.user.username,
        title,
        description}
        );
      setUpdate(false);
      }catch(err) {}
   }
    
    return (
        <div className="singlePostDetails">
          <div className="singlePostWrapper">
              {post.postPic && 
              <img className="singlePostImg" 
              src={PF + post.postPic} 
              alt="img"/>
              }
              { update ? <input type="text" value={title} className="createInput"
              onChange={(e)=> setTitle(e.target.value)}
              /> : (
                        <h1 className="singlePostTitle">
                        {post.title}
                        
                          {post.username === user?.user.username && (
                            <div className="singlePostActions">
                            <i className=" spostIcon fas fa-edit" onClick={() => setUpdate(true)}></i>
                            <i className="spostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                          )}
                        
                    </h1>
              )}
              
              <div className="singlePostInfo">
                  <span className="singlePostAuthor"> Author :<Link to={`/?user=${post.username}`} className="link"> <strong>{post.username}</strong></Link></span>
                  <span>{new Date(post.createdAt).toDateString()}</span>
              </div>
                  {update ? <textarea className="createInput textInput" type="text" value={description}
                  onChange={(e)=> setDesc(e.target.value)}
                  /> : (
                            <p className="singlePostDesc">{post.description}</p>
                  )}
                 {update && <button className="updateBtn" onClick={handleUpdate}>Update</button>} 
               
          </div>
            
        </div>
    )
}
