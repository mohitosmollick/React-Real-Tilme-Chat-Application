import React from "react";
import Chat from "../componet/Chat";
import SiteBar from "../componet/SideBar";

const HomePage = () =>{
    return(
        <div className="home">
            <div className="container">
                <SiteBar/>
                <Chat/>
            </div>
        </div>
    )
}
export default HomePage;