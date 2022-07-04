import React from 'react';
import {Avatar } from "@mui/material";
import "./sidebarchat.css";

function SidebarChat({addNewChat }) {

    const createChat = () => {
        const roomName = prompt ("Please enter name for chat");

        if (roomName){
            //do something...
        }
    };

  return !addNewChat ? (
    <div className="sidebarchat">
    <Avatar src="https://avatars.dicebear.com/api/human/123.svg" />
    <div className='sidebarchat_info'>
        <h2>Room name</h2>
        <p>Last message...</p>
    </div>
    </div>
  ) :     (
    <div onClick = {createChat} className="sidebarchat">
        <h2>Add new chat</h2>
    </div>
  )
  }


export default SidebarChat