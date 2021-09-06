import React from 'react'
import Userboard from './Userlayout'
import Messagetab from './messagetab'

export default function Message() {
    return (
        <div className = "messageboard">
           
          <Userboard />
          <Messagetab />

        </div>
    )
}
