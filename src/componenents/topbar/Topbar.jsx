import React, { useContext } from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

export default function Topbar() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} =useContext(AuthContext);
  // console.log(user)
  // console.log("HII "+user.username)
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{"textDecoration":"none"}}>
            <span className='topbarLogo'>Pixel</span>
        </Link>
      </div>
      <div className="topbarCenter">
          <div className="searchBar">
            <Search className='searchIcon'/>
            <input placeholder='Search for friend, post or videos' className='searchInput'/>
          </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>


          <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF+user.profilePicture : PF+"no-person.png" } alt="" className="topbarImg" />
          </Link>
          

          
      </div>

    </div>
  )
}
