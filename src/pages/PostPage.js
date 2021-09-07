import React from 'react'
import Sidebar from "../components/Sidebar"
import PostDetails from '../components/SingleDetails'

export default function PostPage() {
    return (
        <div className="postPage">
            <PostDetails/>
            <Sidebar/>
        </div>
    )
}
