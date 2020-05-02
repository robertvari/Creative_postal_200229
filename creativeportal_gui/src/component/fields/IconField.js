import React from 'react';
import "./IconField.css"

function IconField(props) {
    const {icon, placeholder} = props

    return (
        <div className="icon_field">
            <i className={icon}/>
            <input type="text" placeholder={placeholder}/>
        </div>
    );
}

export default IconField;