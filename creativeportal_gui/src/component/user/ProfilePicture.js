import React from 'react';
import './ProfilePicture.css'

function ProfilePicture(props) {
    const {width} = props

    return <img
        src="https://source.unsplash.com/500x500/?face"
        className="profile_picture"
        alt=""
        style={{width: width}}
    />
}

export default ProfilePicture;