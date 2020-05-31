import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import "./PostItem.css"

import ProfilePicture from "../user/ProfilePicture";

import SocialButton from "../widgets/SocialButton";
import {UserContext} from "../context/UserContext";

function PostItem(props) {
    const {logged_in} = useContext(UserContext)
    const {post_data} = props

    return (
        <div className="post_item">
            <div className="post_item_header">
                <ProfilePicture width={"45px"} user={post_data.user}/>
                {post_data.user.full_name}
            </div>

            <Link
                to={`/posts/${post_data.slug}`}
                className="post_item_image"
                style={{backgroundImage: `url(${post_data.image})`}}
            />

            <div className="social_icon_layout">
                <SocialButton icon={"far fa-comments"} number={post_data.comments}/>
                <SocialButton icon={"fas fa-thumbs-up"} number={post_data.likes} clickable={!!logged_in}/>
                <SocialButton icon={"far fa-star"} number={post_data.favorites} clickable={!!logged_in}/>
            </div>
        </div>
    );
}

export default PostItem;