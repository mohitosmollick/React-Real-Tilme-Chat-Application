import React from "react";
import img from "../images/two.jpg";

const Chats = () =>{
    return(
        <div className="chats">
            <div className="userChat">
                <img src={img} alt="" />
                <div className="userChatInfo">
                    <span>Jons</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}
export default Chats;