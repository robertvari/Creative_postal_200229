import React from 'react';
import './Home.css'

import Sidebar from "./layout/Sidebar";
import PostList from "./layout/PostList";
import SearchBar from "./layout/SearchBar";


function Home(props) {
    return (
        <div className="home_layout">

            <Sidebar/>

            <PostList/>

            <SearchBar/>

        </div>
    );
}

export default Home;