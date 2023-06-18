import React from 'react'
import "./online.css"

export default function Online({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer" >
                <img className="rightbarProfileImage" 
                src={PF+user.profilePicture} alt="" 
                 />
                <div className='rightbarOnline'></div>
              </div>
              <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
