import React from 'react';
import FormHeader from "../widgets/FormHeader";

function Registration(props) {
    const register_action = (e) => {
        e.preventDefault()
    }

    return (
        <div className="center_page">
            <form>
                <FormHeader text={"Registration"}/>

                <input type="email" placeholder="email"/>
                <input type="password" placeholder="Password"/>

                <div className="form_help">
                    <p>- At least 6 characters</p>
                    <p>- Contains numbers</p>
                    <p>- Contains uppercase and lowercase characters</p>
                    <p>- Contains special characters</p>
                </div>

                <input type="password" placeholder="Confirm your password"/>

                <div className="clickbox_layout">
                    <input type="checkbox" required name="terms"/>
                    <p>By creating an account, you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy.</a> </p>
                </div>
                <hr/>
                <button onClick={register_action}>Register</button>
            </form>
        </div>
    );
}

export default Registration;