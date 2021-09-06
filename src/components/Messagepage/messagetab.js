import { Avatar } from '@material-ui/core'
import React from 'react'

export default function messagetab() {
    return (

        <div  className = "chat">
           

          <div className = "chat__header" >

              <Avatar />
              <div chat__headerinfo>
                  <h1>room name</h1>
                  <p>last seen ...</p>

              </div>


          </div>

          <div className = "chat__body">

          </div>

          <div className = "chat__footer">

          </div>



        </div>
    )
}
