import React from 'react';
import Logo from "../images/logo.png"
import "./Sidebar.css"


function MenuItem(props) {
    return (
        <div>
            <i className={props.icon}/> {props.text}
        </div>
    )
}


function Sidebar(props) {
    return (
        <div>
            <div className="site_header">
                <img src={Logo} alt=""/>
                Creative Portal
            </div>

            <hr/>

            <MenuItem text={"Home"} icon={"fas fa-home"}/>
            <MenuItem text={"Notifications"} icon={"fas fa-bell"}/>
            <MenuItem text={"Likes"} icon={"fas fa-thumbs-up"}/>
            <MenuItem text={"Favorites"} icon={"fas fa-star"}/>
            <MenuItem text={"Collections"} icon={"fas fa-object-group"}/>

        </div>
    );
}

export default Sidebar;