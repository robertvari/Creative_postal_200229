import React from 'react';
import './SearchBar.css'

import IconField from "../widgets/IconField";

function SearchBar(props) {
    return (
        <div>
            <div className="search_panel">
                <IconField icon={"fas fa-search"} placeholder={"Search..."}/>

                <hr/>

                <div>
                    Tag filter...
                </div>
            </div>
        </div>
    );
}

export default SearchBar;