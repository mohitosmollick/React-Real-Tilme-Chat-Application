import React from "react";
import img from "../images/two.jpg";

const Search = () =>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text"  placeholder="Find a User"/>
            </div>
            <div className="userChat">
                <img src={img} alt="" />
                <div className="userChatInfo">
                    <span>jons</span>
                </div>
            </div>
        </div>
    )
}
export default Search;