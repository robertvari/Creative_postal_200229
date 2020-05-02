import React from 'react'
import "./PostItem.css"

import ProfilePicture from "../user/ProfilePicture";

function PostItem(props) {
    const {post_data, index} = props

    return (
        <div className="post_item">
            <div className="post_item_header">
                <ProfilePicture width={"45px"} index={index}/>
                {post_data.author.name}
            </div>

            <div className="post_item_image" style={{backgroundImage: `url(${post_data.photo}${index})`}}>

            </div>
        </div>
    );
}

export default PostItem;