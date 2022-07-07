import React, {useState, useEffect} from 'react';
import {Avatar } from "@mui/material";
import "./sidebarchat.css";

function SidebarChat({addNewChat }) {

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  },[]);

    const createChat = () => {
        const roomName = prompt ("Please enter name for chat");

        if (roomName){
            //do something later...
        }
    };

  return !addNewChat ? (
    <div className="sidebarchat">
    
    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
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