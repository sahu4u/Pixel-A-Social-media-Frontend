import React,{useEffect, useState} from 'react'
import "./commentSection.css"
import axios from 'axios';
import {format} from "timeago.js"
import { Link } from 'react-router-dom';


export default function CommentSection({comment}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] =useState({});
    
    //fetch the user
    useEffect(()=>{

        const fetchUser=async ()=>{
      
        console.log(comment.userId)
        const res=await axios.get(`/users?userId=${comment.userId}`)
        console.log(res)
        setUser(res.data)
        }
    
        fetchUser();
        
      
      },[comment.userId])
  return (
    <>
                <div className="commentFull">
                    <div className="imgAndPhoto">
                        <Link to={"/profile/"+user.username}>
                            <img src={user.profilePicture ? PF+ user.profilePicture : PF+"no-person.png"}alt="" className="commentFullImg" />
                        </Link>
                        
                        <div className='content'>
                            <div className='timeName'>
                            <span className="commenterName">{user.username}</span>
                            <span className='commentTime'>{format(comment.createdAt)}</span>   
                            </div>
                        <p className="comment">{comment.cmnt}</p>
                        </div>
                    </div>
                    
                </div>
               
    </>
  )
}

// const PF=process.env.REACT_APP_PUBLIC_FOLDER;
//   const [comments,setComments]=useState([]);

//   useEffect(()=>{
//     const fetchComments=async ()=>{
//       try{
//       const res=await axios.get("comments/" + post._id);
//       setComments(res.data.sort((p1,p2)=>{
//         return new Date(p2.createdAt)- new Date(p1.createdAt)
//       }));
//       // console.log(res);
//       }
//       catch(err){
//         console.log("AXIOS ERROR ->"+err)
//       }

//     }

//     fetchComments();
    
  
//   },[post._id,post])