import React from "react"
import './App.css';
import Chat from "./chatbar/Chat";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="app">
    <div className='app_body'>
    

   <Sidebar />
   <Chat />


    </div>
       
    </div>
  );
}

export default App;
