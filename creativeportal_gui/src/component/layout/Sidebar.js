import React, {useContext, Fragment} from 'react';
import {Link} from "react-router-dom";


import Logo from "../images/logo.png"
import "./Sidebar.css"


import ProfilePicture from "../user/ProfilePicture";
import {UserContext} from "../context/UserContext";

function MenuItem(props) {
    return (
        <div className="menu_item">
            {props.text} <i className={props.icon}/>
        </div>
    )
}


function Sidebar(props) {
    const {logged_in} = useContext(UserContext)

    return (
        <div>
            <div className="side_panel">
                <Link to={"/"}>
                    <div className="site_header">
                        <img src={Logo} alt=""/>
                        Creative Portal
                    </div>
                </Link>

                <hr/>

                {logged_in?
                    <Fragment>
                        <Link to="/profile/robert_vari"><ProfilePicture width={"150px"} index={0}/></Link>

                        <hr/>

                        <Link to="/upload"><MenuItem text={"Upload Photo"} icon={"fas fa-cloud-upload-alt"}/></Link>

                        <hr/>

                        <Link to={"/"}><MenuItem text={"Home"} icon={"fas fa-home"}/></Link>
                        <Link to={"/user/notifications"}><MenuItem text={"Notifications"} icon={"fas fa-bell"}/></Link>
                        <Link to={"/user/likes"}><MenuItem text={"Likes"} icon={"fas fa-thumbs-up"}/></Link>
                        <Link to={"/user/favorites"}><MenuItem text={"Favorites"} icon={"fas fa-star"}/></Link>
                        <Link to={"/user/collections"}><MenuItem text={"Collections"} icon={"fas fa-object-group"}/></Link>

                        <hr/>

                        <Link to={"/user/logout"}><MenuItem text={"Log Out"} icon={"fas fa-sign-out-alt"}/></Link>
                    </Fragment>

                    :
                    <Fragment>
                        <Link to={"/user/login"}><MenuItem text={"Log In"} icon={"fas fa-sign-in-alt"}/></Link>
                        <Link to={"/user/registration"}><MenuItem text={"Register"} icon={"fas fa-user-plus"}/></Link>
                    </Fragment>
                }



            </div>
        </div>
    );
}

export default Sidebar;