import React, {useContext} from 'react';
import "./PostList.css"
import PostItem from "../posts/PostItem";
import {PostContext} from "../context/PostContext";


function PostList(props) {
    const {post_list} = useContext(PostContext)

    if(!post_list){
        return null
    }

    return (
        <div className="post_list_layout">
            {post_list.map(post_data => <PostItem key={post_data.id} post_data={post_data}/>)}
        </div>
    );
}

export default PostList;