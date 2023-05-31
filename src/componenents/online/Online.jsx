import React from 'react'
import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer" >
                <img className="rightbarProfileImage" 
                src={user.profilePicture} alt="" 
                 />
                <div className='rightbarOnline'></div>
              </div>
              <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
