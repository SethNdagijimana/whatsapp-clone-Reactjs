import React, {useState, useEffect }from 'react';
import "./sidebar.css";
import {Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from "../firebase";np

function Sidebar() {



  const [isOpen,setIsOpen] = useState(false);
  const onMenuButtonClick =(evt) => {

      setIsOpen(!isOpen)    
  }

  const [rooms, setRooms] = useState([]);

  //setRooms(!rooms)
  //setRooms (props.data)

  useEffect(() => {

    //firebase

    db.collection("rooms").onSnapshot(snapshot => (

        setRooms(snapshot.docs.map(doc =>
          
          ({
            id: doc.id,
            data: doc.data(),
          })
          
          ))
      
    ));
  }, []);
  return (
    <div className='sidebar'>
    <div className='sidebar_header'>
    <IconButton>
      <Avatar />  
      </IconButton>
      <div className='sidebar__headerRight'>   
      <IconButton> 
        <DonutLargeIcon />          
        </IconButton>

       <IconButton> 
       <ChatIcon />
       </IconButton>
       
        <button onClick={onMenuButtonClick}>
        <MoreVertIcon className="menu" />
        <div className={`menu-class  ${isOpen ? 'visible':""}`}>
                            
                            <label><button>New Group</button></label>
                            <label><button>Starred Messages</button></label>
                            <label><button>Settings</button></label>
                            <label><button>Log Out</button></label>
                            

                        </div>
        </button>
        
        
      </div>
      
     </div>
    <div className='sidebar_search' >
    <div className="sidebar_searchContainer">
    <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder='Search or start a new chat' type="text" />
        </div>
    </div>
    <div className='sidebar_chats'>
   
      <SidebarChat addNewChat/>
      <SidebarChat />
       <SidebarChat />
       <SidebarChat />
       
    </div>
    </div>
  )
}

export default Sidebar