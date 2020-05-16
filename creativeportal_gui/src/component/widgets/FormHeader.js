import React from 'react';
import SiteLogo from "./SiteLogo";

function FormHeader(props) {
    return (
        <div className="form_header">
            <SiteLogo/>

            {props.text}
        </div>
    );
}

export default FormHeader;