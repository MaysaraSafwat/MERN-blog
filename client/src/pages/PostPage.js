import React from 'react'
import Sidebar from "../components/Sidebar"
import SinglePostDetails from '../components/SinglePostDetails'

export default function PostPage() {
    return (
        <div className="postPage">
            <SinglePostDetails/>
            <Sidebar/>
        </div>
    )
}
