import React ,{ useContext, useEffect,useState } from 'react'
import "./saved.css"
import axios from "axios"
import Post from '../../componenents/post/Post'
import { AuthContext } from '../../context/AuthContext'
import Topbar from '../../componenents/topbar/Topbar'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Rightbar from '../../componenents/rightbar/Rightbar'
import SavedFeed from '../../componenents/savedFeed/SavedFeed'

export default function Saved() {
    // const [posts,setPosts]=useState([]);
    const {user} = useContext(AuthContext);
  

  
  return (
    <>
        <Topbar/>
        <div className="container">
            <Sidebar/>
            <div className='savedFeed'>
            <SavedFeed username={user.username}/>
            </div>
            <Rightbar/>
        </div>
        
    </>
  )
}
