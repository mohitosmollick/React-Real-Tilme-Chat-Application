import React from "react";
import { IoMdAttach } from 'react-icons/io';
import { BsCardImage } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const Input = () =>{
    return(
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <IoMdAttach className="icon" />
                <input type="file" style={{display:'none'}} id="file"  />
                <label className="file">
                    <BsCardImage className="icon"/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}
export default Input;