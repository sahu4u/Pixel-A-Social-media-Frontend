import React from 'react'
import "./rightbar.css"
import { CardGiftcard } from '@mui/icons-material'
import { Users } from '../dummyData'
import Online from '../online/Online'
import Profile from '../../pages/profile/Profile'

export default function Rightbar({profile}) {

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
          <img src="/assets/ad/ad1.jpg" alt="" className="rightbarAd" />
          <img src="/assets/ad/ad5.jpg" alt="" className="rightbarAd" />
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

  const ProfileRightbar= ()=>{
    return (
      <>
        <h4 classname='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Jhansi</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Uttar Pradesh</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">
          User friends
        </h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
             <img src="/assets/person/p2.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>

          <div className="rightbarFollowing">
             <img src="/assets/person/p3.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>

          <div className="rightbarFollowing">
             <img src="/assets/person/p4.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>

          <div className="rightbarFollowing">
             <img src="/assets/person/p5.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>

          <div className="rightbarFollowing">
             <img src="/assets/person/p6.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>

          <div className="rightbarFollowing">
             <img src="/assets/person/p7.jpg" alt="" className="rightbarFollowingImg" />
             <span className="rightbarFollowingName">Divya</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       { profile ? <ProfileRightbar/> : <HomeRightbar/> } 
      </div>
    </div>
  )

}
