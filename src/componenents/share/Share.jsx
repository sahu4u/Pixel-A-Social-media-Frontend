import React from 'react'
import "./share.css"
import { PermMedia, Room, Label, EmojiEmotions } from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
              <img src="/assets/person/p1.jpg" alt="" className='shareProfileImg' />
              <input 
              placeholder= "What's in your mind Charu ?"
              className='shareInput'/>
            </div>

            <hr className="shareHr" />

            <div className="shareOptions">
              <div className="shareBottom">

                <div className="shareOption" >
                  <PermMedia htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptiontext'>Photo/Video</span>
                </div>

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

              </div>
              <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
