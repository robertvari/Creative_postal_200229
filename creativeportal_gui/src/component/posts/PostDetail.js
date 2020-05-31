import React, {useContext, useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom"

import "./PostDetail.css"
import ProfilePicture from "../user/ProfilePicture";
import Comment from "../widgets/Comment";
import {PostContext} from "../context/PostContext";


function PostDetail(props) {
    const {slug} = useParams()
    const {fetch_post_details} = useContext(PostContext)
    const [post_details, set_post_details] = useState(null)

    useEffect(() => {
        fetch_post_details(slug).then(
            post_data => set_post_details(post_data)
        )
    }, [])

    useEffect(() => {
        if(post_details){
            console.log("Fetch comments")
        }
    }, [post_details])

    if(!post_details){
        return null
    }

    return (
        <div className="post_detail_layout">
            <div className="post_details_header">
                <ProfilePicture width={"100%"} user={post_details.user}/>
                <div>
                    <Link to={"/profile/user-name"} className="user_name">{post_details.user.full_name}</Link>
                    <div className="social_links_layout">
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"/></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"/></a>
                        <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"/></a>
                    </div>
                </div>
            </div>

            <img src={post_details.image} alt="" className="post_detail_image"/>

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