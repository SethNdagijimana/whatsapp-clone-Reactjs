import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react';
import "./chat.css";

function Chat() {
  return (
    <div className='chat'>

    <div className="chat_header">
        <Avatar src="https://avatars.dicebear.com/api/human/123.svg" />
        
        <div className="chat_header_info">
             <h3>React</h3>
             <p>Last seen at...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchIcon />
           </IconButton>
    
          <IconButton> 
           <AttachFileIcon />
          </IconButton>
       
           <IconButton>
           <MoreVertIcon />
           </IconButton>

    </div>
    </div>
    
    <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
        
        <span className="chat_name ">seth</span>
        Hey guys
        
        <span className="chat_time">2:30pm</span>      
        </p>
    </div>
    <div className='chat_footer'>
        <InsertEmoticonIcon />
        <form>
            <input placeholder="Type a message" type="text" />

            <button type="submit">Send a message</button>
        </form>
        <MicIcon />

    </div>

    </div>
  )
}

export default Chat