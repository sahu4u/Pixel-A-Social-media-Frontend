import React, { useContext, useEffect,useState } from 'react'
import Share from '../share/Share'
import "./feed.css"
import Post from '../post/Post'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
// import { Posts } from '../dummyData'


export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  const {user} = useContext(AuthContext)

  function home(){
    const fetchPosts=async ()=>{
      
      try{
        const res=username
                    ? await axios.get("/posts/profile/" + username)
                    : await axios.get("posts/timeline/" + user._id);
        setPosts(res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt)- new Date(p1.createdAt)
        }));
        // console.log(res);
        }
        catch(err){
          console.log("AXIOS ERROR ->"+err)
        }
  
    }

    fetchPosts();
  }
 

  useEffect(home,[username,user._id])

  // console.log(posts)
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username|| username===user.username) &&<Share/> }
 
        {posts.map(p=>(
          
            <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}
