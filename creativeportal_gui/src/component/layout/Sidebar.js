import React from 'react';
import Logo from "../images/logo.png"
import "./Sidebar.css"


import ProfilePicture from "../user/ProfilePicture";

function MenuItem(props) {
    return (
        <div className="menu_item">
            {props.text} <i className={props.icon}/>
        </div>
    )
}


function Sidebar(props) {
    return (
        <div className="side_panel">
            <div className="site_header">
                <img src={Logo} alt=""/>
                Creative Portal
            </div>

            <hr/>

            <ProfilePicture width={"150px"}/>

            <hr/>

            <MenuItem text={"Upload Photo"} icon={"fas fa-cloud-upload-alt"}/>

            <hr/>

            <MenuItem text={"Home"} icon={"fas fa-home"}/>
            <MenuItem text={"Notifications"} icon={"fas fa-bell"}/>
            <MenuItem text={"Likes"} icon={"fas fa-thumbs-up"}/>
            <MenuItem text={"Favorites"} icon={"fas fa-star"}/>
            <MenuItem text={"Collections"} icon={"fas fa-object-group"}/>

            <hr/>
            <MenuItem text={"Log Out"} icon={"fas fa-sign-out-alt"}/>

        </div>
    );
}

export default Sidebar;