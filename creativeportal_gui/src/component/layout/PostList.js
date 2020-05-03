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
    const range = Array.from({ length: 5 - 0 + 1 }, (_, i) => i);

    return (
        <div className="post_list_layout">
            {range.map(index => <PostItem post_data={post_data} key={index} index={index}/>)}
        </div>
    );
}

export default PostList;