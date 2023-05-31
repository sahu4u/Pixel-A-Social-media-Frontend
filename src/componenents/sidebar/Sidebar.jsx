import React from 'react'
import "./sidebar.css"
import { RssFeed } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import  {PlayCircle} from '@mui/icons-material'
import { Groups } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'
import { Help } from '@mui/icons-material'
import { Work } from '@mui/icons-material'
import { Event } from '@mui/icons-material'
import { School } from '@mui/icons-material'
import { Users } from '../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Feed</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Chats</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <PlayCircle className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Reels</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Groups className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Groups</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Saved</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Help className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Questions</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Work className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Jobs</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Events</span>
                </li>
            </ul>

            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Courses</span>
                </li>
            </ul>

            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u} />
            ))}
                
            </ul>
        </div>
    </div>
  )
}
