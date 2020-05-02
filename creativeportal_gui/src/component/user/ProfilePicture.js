import React from 'react';
import './ProfilePicture.css'

function ProfilePicture(props) {
    const {width, index} = props

    return <img
        src={"https://source.unsplash.com/500x500/?face" + index}
        className="profile_picture"
        alt=""
        style={{width: width}}
    />
}

export default ProfilePicture;