import React from "react";
import img from "../images/two.jpg";

const Messege = () =>{
    return(
        <div className="messege owner">
            <div className="messageInfo">
                <img src={img} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
export default Messege;