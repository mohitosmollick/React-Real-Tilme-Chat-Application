import React from "react";

import { BsCameraVideoFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import Messeges from "./Messages";
import Input from "./Input";

const Chat = () =>{
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <BsCameraVideoFill className="icon" />
                    <FaUserPlus className="icon" />
                    <MdMoreHoriz className="icon" />
                </div>
            </div>
            <Messeges/>
            <Input/>
        </div>
    )
}
export default Chat;