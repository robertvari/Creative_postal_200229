import React from 'react'
import {Link} from "react-router-dom"
import "./PostItem.css"

import ProfilePicture from "../user/ProfilePicture";

import SocialButton from "../widgets/SocialButton";

function PostItem(props) {
    const {post_data, index} = props

    return (
        <Link to={`/posts/${post_data.slug}`} className="post_item">
            <div className="post_item_header">
                <ProfilePicture width={"45px"} index={index}/>
                {post_data.author.name}
            </div>

            <div className="post_item_image" style={{backgroundImage: `url(${post_data.photo}${index})`}}>
                <div className="social_icon_layout">
                    <SocialButton icon={"far fa-comments"} number={10}/>
                    <SocialButton icon={"fas fa-thumbs-up"} number={243} clickable={true}/>
                    <SocialButton icon={"far fa-star"} number={131} clickable={true}/>
                </div>
            </div>
        </Link>
    );
}

export default PostItem;