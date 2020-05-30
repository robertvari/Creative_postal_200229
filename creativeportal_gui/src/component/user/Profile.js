import React, {useContext, useState, Fragment, useRef, useEffect} from 'react';
import './Profile.css'

import IconField from "../widgets/IconField";
import {useParams} from "react-router-dom";
import {UserContext} from "../context/UserContext";

function ProfileUpdate(props) {
    const {user, update_profile} = props

    const [full_name, set_full_name] = useState(user.full_name)
    const [address, set_address] = useState(user.address)
    const [job_title, set_job_title] = useState(user.job_title)
    const [linkedin, set_linkedin] = useState(user.linkedin)
    const [twitter, set_twitter] = useState(user.twitter)
    const [instagram, set_instagram] = useState(user.instagram)
    const [about, set_about] = useState(user.about)
    const [selected_file, set_selected_file] = useState(null)
    const file_input = useRef(null)
    const image_canvas = useRef(null)


    const open_image = () => {
        file_input.current.click()
    }

    const set_image = () => {
        set_selected_file(file_input.current.files[0])
    }

    const show_image = () => {
        let reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function() {
        return function(e) {
            // Render thumbnail.
            image_canvas.current.src = e.target.result
        };
        })(selected_file);

        // Read in the image file as a data URL.
        reader.readAsDataURL(selected_file);
    }

    const update_profile_action = (e) =>{
        e.preventDefault()

        const formData = new FormData()
        formData.append('full_name', full_name)
        formData.append('address', address)
        formData.append('job_title', job_title)
        formData.append('linkedin', linkedin)
        formData.append('twitter', twitter)
        formData.append('instagram', instagram)
        formData.append('about', about)

        if(selected_file){
            formData.append('image', selected_file)
        }

        update_profile(formData)
    }

    useEffect(() => {
        if(selected_file){
            show_image()
        }
    }, [selected_file])

    return (
        <Fragment>
            <div className="profile_picture_container">
                <img
                    src={user.image}
                    alt=""
                    onClick={open_image}
                    ref={image_canvas}
                />
            </div>

            <input
                type="file"
                accept="image/jpeg, image/png"
                name="image"
                ref={file_input}
                onChange={set_image}
                hidden
            />

            <hr/>

            <div className="profile_fields_layout">
                <div>
                    <IconField icon={"fas fa-signature"} placeholder={"Name"} value={full_name} set_value={set_full_name}/>
                    <IconField icon={"fas fa-map-marker-alt"} placeholder={"Address"} value={address} set_value={set_address}/>
                    <IconField icon={"fas fa-briefcase"} placeholder={"Job title"} value={job_title} set_value={set_job_title}/>

                    <IconField icon={"fab fa-linkedin"} placeholder={"Linkedin"} value={linkedin} set_value={set_linkedin}/>
                    <IconField icon={"fab fa-twitter"} placeholder={"Twitter"} value={twitter} set_value={set_twitter}/>
                    <IconField icon={"fab fa-instagram"} placeholder={"Instagram"} value={instagram} set_value={set_instagram}/>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder={"About"} value={about} onChange={e => {set_about(e.target.value)}}/>
            </div>

            <hr/>

            <button onClick={update_profile_action}>Update Profile</button>
        </Fragment>
    )
}

function StaticProfile() {
    return (
        <div>Static profile</div>
    )
}


function Profile(props) {
    const {slug} = useParams()
    const {user, update_profile} = useContext(UserContext)

    if(!user){
        return null
    }

    return (
        <div className="user_profile_layout">
            {slug === user.slug ?
                <ProfileUpdate user={user} update_profile={update_profile}/>
                :
                <StaticProfile/>
            }
        </div>
    );
}

export default Profile;