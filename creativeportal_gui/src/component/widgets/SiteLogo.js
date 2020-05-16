import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/logo.png";

function SiteLogo(props) {
    return (
        <Link to={"/"}>
            <div className="site_header">
                <img src={Logo} alt=""/>
                Creative Portal
            </div>
        </Link>
    );
}

export default SiteLogo;