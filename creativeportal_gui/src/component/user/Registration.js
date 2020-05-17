import React, {useContext, useEffect, useState, useRef} from 'react';
import FormHeader from "../widgets/FormHeader";
import {UserContext} from "../context/UserContext";
import {useHistory} from "react-router-dom";

function Registration(props) {
    const {errors, set_errors, validate_email, check_passwords, register_user} = useContext(UserContext)
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const [password2, set_password2] = useState("")
    const checkbox = useRef(null)
    const history = useHistory()

    const register_action = (e) => {
        e.preventDefault()
        set_errors([])

        if(!validate_email(email)){return}
        if(!check_passwords(password, password2)){return}

        if(!checkbox.current.checked){
            set_errors(["You have to check our Terms of Service before register"])
            return
        }

        register_user(email, password)
        history.push("/user/confirm-email")
    }

    useEffect(() => {
        if(process.env.NODE_ENV === "development"){
            set_email("testuser@gmail.com")
            set_password("testpas123")
            set_password2("testpas123")
            checkbox.current.checked = true
        }
    }, [])


    return (
        <div className="center_page">
            <form>
                <FormHeader text={"Registration"}/>

                <input type="email" placeholder="email" value={email} onChange={e => set_email(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => set_password(e.target.value)}/>

                <div className="form_help">
                    <p>- At least 6 characters</p>
                    <p>- Contains numbers</p>
                    <p>- Contains uppercase and lowercase characters</p>
                    <p>- Contains special characters</p>
                </div>

                <input type="password" placeholder="Confirm your password" value={password2} onChange={e => set_password2(e.target.value)}/>

                <div className="clickbox_layout">
                    <input type="checkbox" required name="terms" ref={checkbox}/>
                    <p>By creating an account, you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy.</a> </p>
                </div>

                <hr/>

                {errors &&
                    <div className="errors">
                        {errors.map(error => <p key={error}>{error}</p>)}
                    </div>
                }

                <button onClick={register_action}>Register</button>
            </form>
        </div>
    );
}

export default Registration;