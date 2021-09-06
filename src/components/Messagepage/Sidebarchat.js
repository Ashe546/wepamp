import { Avatar } from '@material-ui/core'
import React, {useState ,useEffect} from 'react'

export default function Sidebarchat( { addNewChat } ) {

     const [seed, setSeed] = useState('')

     useEffect( () => {

       Math.floor(
           Math.random() * 5000)

     },  [])

     const createChat = () => {
         const roomName =prompt("please enter name for chat");

         if (roomName) {
             //do some database staff
             console.log(roomName)
         }
     };


    return !addNewChat ? (
        <div className = "sidebarChat">
              

           <Avatar src= "https://avatars.dicebear.com/api/human/1.svg" />

           <div className = "sidebarChat__info">
               <h4>Room Name</h4>
               <p>Last message.....</p>
           </div>


        </div>
    ): (
        <div onClick={createChat} className = "sidebarChat">
             <h2>Add new chat</h2>
        </div>
    )
}
