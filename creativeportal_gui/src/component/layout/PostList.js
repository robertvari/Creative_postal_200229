import React from 'react';
import "./PostList.css"
import PostItem from "../posts/PostItem";


const post_data = {
    author: {
        id: 1,
        name: "John Doe",
        profile_pic : "https://source.unsplash.com/500x500/?face"
    },
    id: 1,
    title: "Post Title",
    photo: "https://source.unsplash.com/1600x900/?nature,water"
}

function PostList(props) {
    return (
        <div className="post_list_layout">
            <PostItem post_data={post_data}/>
            <PostItem post_data={post_data}/>
            <PostItem post_data={post_data}/>
            <PostItem post_data={post_data}/>
            <PostItem post_data={post_data}/>
        </div>
    );
}

export default PostList;