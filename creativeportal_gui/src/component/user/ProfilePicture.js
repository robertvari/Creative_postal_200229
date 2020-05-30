import React from 'react';
import {useHistory} from 'react-router-dom';
import './ProfilePicture.css'

function ProfilePicture(props) {
    const {width, user} = props
    const history = useHistory()

    if(!user){
        return null
    }

    const click_action = () => {
        history.push(`/profile/${user.slug}`)
    }

    return <div
        className="profile_picture"
        onClick={click_action}
        style={{width: width, height: width, backgroundImage: `url(${user.image})`}}
    />
}

export default ProfilePicture;