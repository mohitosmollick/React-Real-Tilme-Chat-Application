import React from "react";
import img1 from "../images/one.jpg";

const Navbar = () =>{
    return(
       <div className="navbar">
           <span className="logo">Live Chat</span>
           <div className="user">
               <img src={img1} alt=""  />
               <span>Dip</span>
               <button>logout</button>
           </div>
       </div>
    )
}
export default Navbar;