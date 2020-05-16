import React from 'react';
import './Login.css'
import FormHeader from "../widgets/FormHeader";

function Login(props) {
    const sign_in_action = (e) => {
        e.preventDefault()
    }

    return (
        <div className="center_page">
            <form>
                <FormHeader text={"Sign In"}/>

                <input type="email" placeholder="email"/>
                <input type="password" placeholder="Password"/>

                <hr/>
                <button onClick={sign_in_action}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;