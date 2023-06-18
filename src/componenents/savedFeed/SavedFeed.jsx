import axios from "axios"
import React ,{ useContext, useEffect,useState } from 'react'
import "./savedFeed.css"
import { AuthContext } from '../../context/AuthContext'
import Post from '../post/Post'

export default function ({username}) {
    const [posts,setPosts]=useState([]);
    const {user} = useContext(AuthContext);
    
  useEffect(()=>{
    const fetchPosts=async ()=>{
      try{
      const res=await axios.get("users/saved/" + user._id);
      setPosts(res.data);
      console.log(res.data)
    //   console.log(posts);
      }
      catch(err){
        console.log("AXIOS ERROR ->"+err)
      }

    }

    fetchPosts();
    
  
  },[user._id,username])

  console.log(posts)

    return (
        <div className='feed'>
          <div className="feedWrapper">
            {
                posts.map(p=>(
          
                    <Post key={p[0]._id} post={p[0]}/>
                ))
            }
          </div>
        </div>
      )
}
