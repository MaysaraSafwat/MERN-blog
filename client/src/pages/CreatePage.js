import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import axios from "axios";

export default function CreatePage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.postPic = filename;
      try {
        await axios.post("/upload", data);
        console.log("uploaded");

      } catch (err) { console.log("upload faild");}
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };

  return (
    <div className="create">
      {file && (
        <img className="createImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i class="inputIcon fas fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
          <input type="text" className="createInput" placeholder="Title"
            onChange={e => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea type="text" className="createInput textInput" placeholder="tell us about it"
            onChange={e => setDescription(e.target.value)}
          >
          </textarea>
        </div>
        <button className="puplishBtn" type="submit">Publish</button>
      </form>

    </div>
  )
}
