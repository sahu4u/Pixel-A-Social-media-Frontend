import React, { useState,useEffect, useContext, useRef } from 'react'
import "./post.css"
import { Delete, MoreVert } from '@mui/icons-material'
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import { Comment } from '@mui/icons-material'
import {Alert, useAlert} from "react-alert"
import CommentSection from '../commentSection/CommentSection'
import { Bookmark } from '@mui/icons-material'
import { BookmarkBorder } from '@mui/icons-material'
// import { Users } from '../dummyData';


export default function Post({post}) {
    
    
    const [like,setLike] =useState(post.likes.length);
    const [isliked,setIsLiked] =useState(false);
    const [user,setUser] =useState({});
    const {user:currentUser} = useContext(AuthContext)
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const [comments,setComments]=useState([]);
    const[message, setMessage]=useState(false)
    var showComment=false;
    const cmnt= useRef();


      //to write the comment
      const submitHandler = async (e) =>{
          e.preventDefault()
          const newCmnt={
            userId:user._id,
            postId:post._id,
            cmnt:cmnt.current.value,
          }
          try{
              axios.post("/comments/",newCmnt)
              // window.location.reload()
            }
            catch(err){
              console.log("ERR2 :"+err)
            }
      }

        //to save the post
        const savePostHandler= async(e)=>{
        }
        //to get the comments on the post
        useEffect(()=>{
            const fetchComments=async ()=>{
              try{
              const res=await axios.get("comments/" + post._id);
              setComments(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt)- new Date(p1.createdAt)
              }));
              // console.log(res);
              }
              catch(err){
                console.log("AXIOS ERROR ->"+err)
              }
            }
            fetchComments();
          },[post._id,post])


    
        //To set the likes
        useEffect(()=>{
            setIsLiked(post.likes.includes(currentUser._id))
        },[currentUser._id,post.likes])


        //fetch the user
        useEffect(()=>{

        const fetchUser=async ()=>{
      
        // console.log(post.userId)
        const res=await axios.get(`/users?userId=${post.userId}`)
        
        setUser(res.data)
        }
    
        fetchUser();
        
      
      },[post.userId])

        const likeHandler=()=>{
            try{
                axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
            }
            catch(err){

            }
            setLike(isliked ?like-1 : like+1)
            setIsLiked(!isliked);
        }

        useEffect(()=>{
            const deletePost=async ()=>{
                
                try{
                    await axios.delete("/posts/"+post._id +{userId:currentUser._id})
                }
                catch(err){
                    console.log("ERROR WHILE DELETING :"+err)
                }
            }
            deletePost();
        },[])

    const deleteHandler=async ()=>{
        console.log("DELETE IS CLICKED")
        try{
            
          const res=  await axios.delete("/posts/"+post._id ,{userId:currentUser._id})
            
            if(res.data.message){
                setMessage(res.data.message)
            }
        }
        catch(err){
            console.log("ERROR WHILE DELETING :"+err)
        }
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`}>
                    <img className='postProfileImg' src={user.profilePicture? PF+user.profilePicture : PF+"no-person.png"} alt="" />
                    </Link>
                    
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight" onClick={savePostHandler}>
                  
                  {currentUser.saved.includes(post._id) ? <Bookmark/> :<BookmarkBorder/>}
                    
                </div>
            </div>


            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={PF+post.img} alt="" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={PF+"like.jpeg"} onClick={likeHandler} alt="" />
                    <img className='likeIcon' src={PF+"heart.png"} onClick={likeHandler} alt="" />
                    <span className='postLikeCounter'>{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className='postCommentText' onClick={()=>{
                    }}>{comments.length} <Comment/></span>
                    <span className='postDelete' onClick={deleteHandler}>{user._id===currentUser._id&& <Delete/> }</span>   
                </div>
            </div>


            <form className="writeComment" onSubmit={submitHandler}>
            <img src={currentUser.profilePicture? PF+currentUser.profilePicture : PF+"no-person.png"} alt="" className='commentProfileImg' />
            <input 
              ref={cmnt}
              placeholder= {"Write a comment! "}
              className='commentInput' />
              <button className='doneButton'>Done</button>
            </form>

           

            <div className="commentBox">
                <h3 className='commentHeading'>Comments</h3>
                {comments.map(p=>(
                <CommentSection key={p._id} comment={p}/>
                 ))}
            </div> 
        </div>
    </div>
  )
}
