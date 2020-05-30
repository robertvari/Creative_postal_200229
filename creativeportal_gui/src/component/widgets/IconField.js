import React from 'react';
import "./IconField.css"

function IconField(props) {
    const {icon, placeholder, value, set_value} = props

    return (
        <div className="icon_field">
            <i className={icon}/>
            <input type="text" placeholder={placeholder} value={value} onChange={e => {set_value(e.target.value)}}/>
        </div>
    );
}

export default IconField;