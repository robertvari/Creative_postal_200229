import React from 'react';
import './SearchBar.css'

import IconField from "../fields/IconField";

function SearchBar(props) {
    return (
        <div>
            <div className="search_panel">
                <IconField icon={"fas fa-search"} placeholder={"Search..."}/>
            </div>
        </div>
    );
}

export default SearchBar;