import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
          {post.postPic && <img className="postImg" 
               src={PF+ post.postPic}
               alt="post" />}
          <div className="postDetails">
              <div className="postCategs">
                  <span className="postCateg">Life </span>
                  <span className="postCateg">Love </span>
              </div>
              <span className="postTitle"> <Link to={`post/${post._id}`} className="link">{post.title}</Link></span>
              <hr/>
              <span className="postDate"> {new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="postDescription">
              {post.description}
          </p>
        </div>
    )
}
