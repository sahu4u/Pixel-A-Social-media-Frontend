import React from 'react'
import Topbar from '../../componenents/topbar/Topbar'
import Sidebar from '../../componenents/sidebar/Sidebar'
import Feed from '../../componenents/feed/Feed'
import Rightbar from '../../componenents/rightbar/Rightbar'
import "./home.css"
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"



export default function Home() {
 
  return (
      <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar />

        </div>
        
        

      </>
  )
}
