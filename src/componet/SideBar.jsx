import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const SiteBar = () =>{
    return(
       <div className="sidebar">
           <Navbar/>
           <Search/>
           <Chats/>
           <Chats/>
           <Chats/>
           <Chats/>
       </div>
    )
}
export default SiteBar;