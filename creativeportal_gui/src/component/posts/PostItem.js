import React from 'react'
import "./PostItem.css"

import ProfilePicture from "../user/ProfilePicture";

function PostItem(props) {
    const {post_data} = props

    return (
        <div className="post_item">
            <div className="post_item_header">
                <ProfilePicture width={"45px"}/>
                {post_data.author.name}
            </div>

            <div className="post_item_image" style={{backgroundImage: `url(${post_data.photo})`}}>

            </div>
            {/*<img src={post_data.photo} alt="" className="post_item_image"/>*/}
        </div>
    );
}

export default PostItem;