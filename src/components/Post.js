import React from 'react'

export default function Post() {
    return (
        <div className="post">
          <img className="postImg" src="https://images.unsplash.com/photo-1517415465-a8f8ad47bea7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="post" />
          <div className="postDetails">
              <div className="postCategs">
                  <span className="postCateg">Life </span>
                  <span className="postCateg">Love </span>
              </div>
              <span className="postTitle"> Post Title</span>
              <hr/>
              <span className="postDate"> 30 mins ago</span>
          </div>
          <p className="postDescription">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
    )
}
