import React from 'react'


export default function PostDetails() {
    return (
        <div className="singlePostDetails">
          <div className="singlePostWrapper">
              <img className="singlePostImg" src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img"/>
              <h1 className="singlePostTitle">
                  Blah blah blahty blah
                  <div className="singlePostActions">
                  <i className=" spostIcon fas fa-edit"></i>
                  <i className="spostIcon fas fa-trash-alt"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuthor"> Author : <strong>Maysora</strong></span>
                  <span>4 centuries ago</span>
              </div>
              <p className="singlePostDesc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
            
        </div>
    )
}
