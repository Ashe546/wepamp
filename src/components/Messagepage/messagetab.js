import { Avatar, IconButton } from '@material-ui/core'
import { InsertEmoticon, Mic, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import React from 'react'

export default function messagetab() {
    return (

        <div  className = "chat">
           

          <div className = "chat__header" >

              <Avatar />
              <div className = "chat__headerinfo">
                  <h1>Room name</h1>
                  <p>last seen ...</p>

              </div>

            <div className = "chat__headerright">
                 <IconButton>
                 <SearchOutlined />     
                </IconButton>  
                  <IconButton>
                  <MoreVert />   
                </IconButton>    

              </div>


          </div>

          <div className = "chat__body">
            
            <p className ="chat__message chat__reciver">
                <span className = "chat__name">ashe213</span>
                Hello guy <span className = "chat__time">3:13pm</span> </p>
            

                 <p className ="chat__message ">
                <span className = "chat__name">ashe213</span>
                Hello guy I have one more idea about the audio. I also want single people to be able to record their thoughts like a podcast and then be able to upload it to other platforms. So either 1, 2, or more people should be able to record a podcast.For example, think about a YouTube video where the host just does an audio recording of his thoughts and posts it without having to record himself or herself. That's what I want. <span className = "chat__time">3:13pm</span> </p>
            


        <p className ="chat__message chat__reciver">
                <span className = "chat__name">ashe213</span>
                Hello guy I have one more idea about the audio. I also want single people to be able to record their thoughts like a podcast and then be able to upload it to other platforms. So either 1, 2, or more people should be able to record a podcast.

For example, think about a YouTube video where the host just does an audio recording of his thoughts and posts it without having to record himself or herself. That's what I want. <span className = "chat__time">3:13pm</span> </p>
            


          </div>


      

          <div className = "chat__footer">
              <IconButton>
                 <InsertEmoticon />
              </IconButton>
       
               <form>
                   <input type= "text" />
                   <button>Send</button>
               </form>
               <IconButton>
                   <Mic />
               </IconButton>
             


          </div>



        </div>
    )
}
