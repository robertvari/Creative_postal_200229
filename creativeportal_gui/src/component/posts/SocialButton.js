import React from 'react';

function SocialButton(props) {
    const {icon, number} = props

    return (
        <div>
            <i className={icon}/>{number}
        </div>
    );
}

export default SocialButton;