
import "./rightbar.css"
import { useContext } from "react"
import { CardGiftcard } from '@mui/icons-material'
import { Users } from '../dummyData'
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile'
import { useEffect, useState } from "react"
import axios from "axios"
import CloseFriend from "../closeFriend/CloseFriend"
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom"
import { Add } from "@mui/icons-material"
import { Remove } from "@mui/icons-material"



export default function Rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([])
  const {user:currentUser,dispatch}=useContext(AuthContext)
  const [followed,setFollowed]= useState(currentUser.following.includes(user?._id))

  //to check whether a user is followed or not
  useEffect(()=>{
    // console.log(currentUser)
    // console.log("Checking true or false"+currentUser.following.includes(user?._id))
    setFollowed(currentUser.following.includes(user?._id))
  },[currentUser,user])


  //To get the list of the friends
  useEffect(()=>{
    const getFriends = async () =>{
      try{
        // console.log(user)
          const friendList = await axios.get("/users/friends/"+user._id)
          setFriends(friendList.data);
      }
      catch(err){
          console.log(err);
      }
    }
        getFriends();
  },[user])

  // console.log(friends)

  const handleClick = async()=>{
    
    try{
        if(followed){
          
          await axios.put("/users/"+user._id+"/unfollow",
          {userId:currentUser._id});
          dispatch({type:"UNFOLLOW", payload:user._id})
          
        }
        else{
          
          await axios.put("/users/"+user._id+"/follow",
          {userId: currentUser._id})
          dispatch({type:"FOLLOW", payload:user._id})
          
          // window.location.reload()
        
      }
    }
    catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }


  const ProfileRightbar= ()=>{
    return (
      <>
      {user.username!==currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow":"Follow" }
          {followed ? <Remove/>: <Add/> }
        </button>
      )}
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">{user.city}</span>
            </div>

            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">{user.from}</span>
            </div>

            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">{user.relationship==1?"Single": user.relationship==2?"Married" : ".." }</span>
            </div>
        </div>
        <h4 className="rightbarTitle">
          User friends
        </h4>
        <div className="rightbarFollowings">
          {friends.map((friend)=>(
          <Link 
          to={"/profile/"+friend.username}
          style={{"textDecoration":"none"}}
          >
            <div className="rightbarFollowing">
             <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"no-person.png"} alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          </Link>
          ))}
        </div>
      </>
    )
  }

  const HomeRightbar=()=>{
    return(
      <>
        <div className="birthdayContainer">
  
          {/* <img classname="birthdayImg" src="assets/giftbox.png" alt="" /> */}
          <CardGiftcard htmlColor='goldenrod' classname="birthdayImg"/>
          <span className='birthdayText'>
          <b>Pratithi</b> and other <b>3</b> friends have a bithday today 
          </span>
        </div>
        <div>
          <img src={PF+"ad/ad1.jpg"} alt="" className="rightbarAd" />
          <img src={PF+"ad/ad5.jpg"} alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendlist">
            {Users.map(u=>(
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </>
    ) 
  }



  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {/* <ProfileRightbar/> */}
       {user ? <ProfileRightbar/> : <HomeRightbar/> } 
      </div>
    </div>
  )

}
