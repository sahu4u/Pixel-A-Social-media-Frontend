import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import { PermMedia, Room, Label, EmojiEmotions } from '@mui/icons-material'
import {AuthContext} from"../../context/AuthContext"
import axios from "axios"
import { Cancel } from '@mui/icons-material'


export default function Share() {
  const {user} =useContext(AuthContext)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const desc= useRef();
  const [file,setFile]= useState(null);

  const submitHandler = async (e) =>{
    e.preventDefault()
    const newPost={
      userId:user._id,
      desc:desc.current.value
    }
    if(file){
      const data = new FormData();
      const fileName =file.name;
      data.append("file",file)
      data.append("name",fileName)
      newPost.img=fileName;
      // console.log(newPost)
      
      try{
        
        await axios.post("/upload", data)
      }
      catch(err){
        console.log("ERR1 :"+err)
      }
    }
  

    try{
      axios.post("/posts",newPost)
      // window.location.reload()
    }
    catch(err){
      console.log("ERR2 :"+err)
    }

  }
  

  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
              <img src={user.profilePicture? PF+user.profilePicture : PF+"no-person.png"} alt="" className='shareProfileImg' />
              <input 
              placeholder= {"What's in your mind "+ user.username +" ?"}
              className='shareInput' ref={desc}/>
            </div>

            <hr className="shareHr" />
            {file&&(
              <div className="shareImgContainer">
                <img  src={URL.createObjectURL(file)} className='shareImg' alt="" />
                <Cancel className="shareCancelImg " onClick={()=>setFile(null)}/>
              </div>
            )}

            <form className="shareOptions" onSubmit={submitHandler}>
              <div className="shareBottom">

                <label htmlFor="file" className="shareOption" >
                  <PermMedia htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptiontext'>Photo/Video</span>
                  <input 
                    style={{display:"none"}}
                    type="file" 
                    id="file" 
                    accept='.png, .jpg, .jpeg' 
                    onChange={(e)=>setFile(e.target.files[0])} />
                </label>

                <div className="shareOption">
                  <Label htmlColor='blue' className='shareIcon'/>
                  <span className='shareOptiontext'>Tag</span>
                </div>

                <div className="shareOption">
                  <Room htmlColor='green' className='shareIcon'/>
                  <span className='shareOptiontext'>Location</span>
                </div>

                <div className="shareOption">
                  <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                  <span className='shareOptiontext'>Feelings</span>
                </div>

              
              <button className="shareButton">Submit</button>
              </div>

            </form>
        </div>
    </div>
  )
}
