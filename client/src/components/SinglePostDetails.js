import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';


export default function SinglePostDetails() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({});
    //const [title, setTitle] = useState("");
    //const [desc, setDesc] = useState("");
   
    console.log(path)

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/post/" + path);
          setPost(res.data);
          //setTitle(res.data.title);
          //setDesc(res.data.description);
        };
        getPost();
      }, [path]);
    
    return (
        <div className="singlePostDetails">
          <div className="singlePostWrapper">
              {post.postPic && 
              <img className="singlePostImg" 
              src={post.ppstPic} 
              alt="img"/>
              }
              
              <h1 className="singlePostTitle">
                  {post.title}
                  <div className="singlePostActions">
                  <i className=" spostIcon fas fa-edit"></i>
                  <i className="spostIcon fas fa-trash-alt"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuthor"> Author :<Link to={`/?user=${post.username}`} className="link"> <strong>{post.username}</strong></Link></span>
                  <span>{new Date(post.createdAt).toDateString()}</span>
              </div>
              <p className="singlePostDesc">{post.description}</p>
          </div>
            
        </div>
    )
}
