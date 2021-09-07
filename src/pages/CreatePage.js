import React from 'react'

export default function CreatePage() {
    return (
        <div className="create">
         <img className="createImg"src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img"/>   
        <form className="createForm">
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                  <i class="inputIcon fas fa-folder-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <input type="text" className="createInput" placeholder="Title" autoFocus={true} />
            </div>
            <div className="createFormGroup">
                <textarea type="text" className="createInput textInput" placeholder="tell us about it"></textarea>
            </div>
            <button className="puplishBtn" type="submit">Publish</button>
        </form>
            
        </div>
    )
}
