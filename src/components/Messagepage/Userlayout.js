import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import Sidebarchat from './Sidebarchat'

export default function Userlayout() {
    return (
        <div className = "userboard" >
           
           <div className = "user__header">

             <Avatar />

           </div>




           <div className = "user__search">

                <div className = "user__searchlayout">

                <SearchOutlined />
                <input placeholder = "Search or start new chat"/>
             
                </div>

             


           </div>





           <div className = "user__chats">
                <div className = "sidebar__chat">

                   <Sidebarchat addNewChat/>
                   <Sidebarchat />
                   <Sidebarchat />
                   <Sidebarchat />
                   <Sidebarchat />


                </div>


           </div>


             

        </div>
    )
}
