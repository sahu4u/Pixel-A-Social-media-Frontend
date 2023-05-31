import React from 'react'
import "./profile.css"
import Topbar from '../../componenents/topbar/Topbar'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Feed from '../../componenents/feed/Feed'
import Rightbar from '../../componenents/rightbar/Rightbar'

export default function Profile() {
    return (
        <>
          <Topbar/>
          <div className="profile">
          <Sidebar/>
          <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src="/assets/posts/cov2.jpg" alt="" className="profileCoverImg" />
                <img src="/assets/person/p1.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Charu Sahu</h4>
                <span className='profileInfoDesc'>A homeless soul!!</span>
            </div>
            
          </div>
          <div className="profileRightBottom">
            
            <Feed/>
            <Rightbar/>
          </div>
          
  
          </div>
          </div>
          
          
          
  
        </>
    )
}
