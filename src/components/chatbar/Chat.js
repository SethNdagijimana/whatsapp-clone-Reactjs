import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React, {useState, useEffect} from 'react';
import "./chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect (() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {

    e.preventDefault();
    console.log("you typed", input);
    
    setInput("");

  }
  return (
    <div className='chat'>

    <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
        
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
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />

            <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />

    </div>

    </div>
  )
}

export default Chat