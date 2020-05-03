import React, {useEffect} from 'react';
import './Profile.css'

import ProfilePicture from "./ProfilePicture";
import IconField from "../widgets/IconField";
import {useParams} from "react-router-dom";

function Profile(props) {
    const {slug} = useParams()

    return (
        <div className="user_profile_layout">
            <ProfilePicture index={0} width={"200px"}/>

            <hr/>

            <div className="profile_fields_layout">
                <div>
                    <IconField icon={"fas fa-signature"} placeholder={"Name"}/>
                    <IconField icon={"fas fa-map-marker-alt"} placeholder={"Address"}/>
                    <IconField icon={"fas fa-briefcase"} placeholder={"Job title"}/>

                    <IconField icon={"fab fa-linkedin"} placeholder={"Linkedin"}/>
                    <IconField icon={"fab fa-twitter"} placeholder={"Twitter"}/>
                    <IconField icon={"fab fa-instagram"} placeholder={"Instagram"}/>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder={"About"}/>
            </div>

            <hr/>

            <button>Update Profile</button>

        </div>
    );
}

export default Profile;