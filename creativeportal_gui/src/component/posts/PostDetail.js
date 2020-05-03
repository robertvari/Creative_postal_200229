import React, {useEffect} from 'react';
import {useParams, Link} from "react-router-dom"

import "./PostDetail.css"
import ProfilePicture from "../user/ProfilePicture";
import Comment from "../widgets/Comment";


function PostDetail(props) {
    const {slug} = useParams()

    return (
        <div className="post_detail_layout">
            <div className="post_details_header">
                <ProfilePicture index={0} width={"100%"}/>
                <div>
                    <Link to={"/profile/user-name"} className="user_name">John Doe</Link>
                    <div className="social_links_layout">
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"/></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"/></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"/></a>
                    </div>
                </div>
            </div>

            <img src="https://source.unsplash.com/1600x900/?nature,water" alt="" className="post_detail_image"/>

            <div className="comments_layout">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </div>
    );
}

export default PostDetail;