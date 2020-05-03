import React, {useState} from 'react';
import "./SocialButton.css"

function SocialButton(props) {
    const [count, set_count] = useState(props.number)
    const [active, set_active] = useState(false)
    const {icon, clickable} = props

    const button_clicked = () => {
        if(active){
            set_count(count - 1)
            set_active(false)
        } else {
            set_count(count + 1)
            set_active(true)
        }
    }

    return (
        <div>
            {clickable?
                <div className={active? "social_button button_active":"social_button"} onClick={button_clicked}>
                    <i className={icon}/> {count}
                </div>
                :
                <div>
                    <i className={icon}/> {count}
                </div>
            }
        </div>
    );
}

export default SocialButton;