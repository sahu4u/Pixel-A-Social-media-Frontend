import React, { useState,useEffect,useContext } from 'react'
import axios from "axios"
import "./profile.css"
import Topbar from '../../componenents/topbar/Topbar'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Feed from '../../componenents/feed/Feed'
import Rightbar from '../../componenents/rightbar/Rightbar'
import { useParams } from 'react-router'
import { Filter } from '@mui/icons-material'
import { AuthContext } from '../../context/AuthContext'
import { Done } from '@mui/icons-material'



export default function Profile() {

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] =useState({});
  const params=useParams()
  const username=params.username;
  console.log(username)
  const {user:currentUser}=useContext(AuthContext)
  const [file,setFile]= useState(null);


  //To change the profile picture
      const submitHandler1 = async (e) =>{
      e.preventDefault()
      const data = new FormData();
      const fileName =file.name;
      data.append("file",file)
      data.append("name",fileName)
      currentUser.coverPicture=fileName
      // newPost.img=fileName;
      // console.log(newPost)

      try{
        
        await axios.post("/upload", data)
      }
      catch(err){
        console.log("ERR1 :"+err)
      }

      try{
        await axios.put("/users/cover/"+currentUser._id, {coverPicture:currentUser.coverPicture})
        console.log(data)
        console.log(fileName)
      }
      catch(err){
        console.log("ERR1 :"+err)
      }

  }

  const submitHandler2 = async (e) =>{
    e.preventDefault()
    const data = new FormData();
      const fileName =file.name;
      data.append("file",file)
      data.append("name",fileName)
      currentUser.profilePicture=fileName
      // newPost.img=fileName;
      // console.log(newPost)

      try{       
        await axios.post("/upload", data)
      }
      catch(err){
        console.log("ERR1 :"+err)
      }

      try{
        await axios.put("/users/profile/"+currentUser._id, {profilePicture:currentUser.profilePicture})
        console.log(data)
        console.log(fileName)
      }
      catch(err){
        console.log("ERR1 :"+err)
      }

  }


  useEffect(()=>{

    const fetchUser=async ()=>{
    const res=await axios.get(`/users/?username=${username}`)
    setUser(res.data)
    }

    fetchUser();
  
  },[])
  
    return (
        <>
          <Topbar/>
          <div className="profile">
          <Sidebar/>
          <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                          <div className="Box">
                                <img src={user.coverPicture ? PF+user.coverPicture:PF + "noCover.png"} alt="" className="profileCoverImg" />
                                {user.username===currentUser.username && 
                                            <form action="" 
                                            className='Options'
                                            onSubmit={submitHandler1}
                                            >
                                                  <label htmlFor="file" className="shareOption" >
                                                    <Filter className='Icon'/>
                                                    <input 
                                                      style={{display:"none"}}
                                                      type="file" 
                                                      id="file" 
                                                      accept='.png, .jpg, .jpeg' 
                                                      onChange={(e)=>setFile(e.target.files[0])} />
                                                  </label>
                                                  <button className="coverButton">{<Done/>}</button>
                                                  
                                            </form>
                                            
                                            }
                          </div>
                          
                          <img src={user.profilePicture ? PF+user.profilePicture : PF+"no-person.png"} alt="" className="profileUserImg" />
                          {
                            user.username===currentUser.username
                            && 
                            <form action=""
                              onSubmit={submitHandler2}
                            >
                                <label htmlFor="file"  >
                                    <Filter className='dpIcon'/>
                                    <input 
                                      style={{display:"none"}}
                                      type="file" 
                                      id="file" 
                                      accept='.png, .jpg, .jpeg' 
                                      onChange={(e)=>setFile(e.target.files[0])} />
                                  </label>
                                  <button className="dpButton">{<Done/>}</button>
                            </form>
                          }
                       </div>
                      <div className="profileInfo">
                          <h4 className='profileInfoName'>{username}</h4>
                          <span className='profileInfoDesc'>{user.desc}</span>
                      </div>
                  </div>
          
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
          
  
          
          </div>
          
          </div>
  
        </>
    )
}


// {user.username===currentUser.username && 
//   <form action="" 
//   className='Options'
//   onSubmit={submitHandler1}
//   >
//         <label htmlFor="file" className="shareOption" >
//           <Filter className='Icon'/>
//           <input 
//             style={{display:"none"}}
//             type="file" 
//             id="file" 
//             accept='.png, .jpg, .jpeg' 
//             onChange={(e)=>setFile(e.target.files[0])} />
//         </label>
//         <button className="shareButton">{<Done/>}</button>
        
//   </form>
  
//   }


                    // <div className='Box'>
                    //   <img src={user.coverPicture ? PF+user.coverPicture:PF + "noCover.png"} alt="" className="profileCoverImg" />
            
                    // </div>