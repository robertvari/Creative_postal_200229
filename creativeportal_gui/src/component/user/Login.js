import React, {useContext, useEffect, useState} from 'react';
import './Login.css'
import FormHeader from "../widgets/FormHeader";
import {UserContext} from "../context/UserContext";
import {useHistory} from "react-router-dom"

function Login(props) {
    const {logged_in, log_in_user, errors, set_errors, validate_email} = useContext(UserContext)
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const history = useHistory()

    const sign_in_action = (e) => {
        e.preventDefault()

        set_errors([])

        if(!validate_email(email)){
            return
        }

        if(password.length === 0){
            set_errors(["Password is required"])
            return
        }

        log_in_user(email, password)
    }

    useEffect(() => {
        if(process.env.NODE_ENV === "development"){
            set_email("testuser@gmail.com")
            set_password("testpas123")
        }
    }, [])

    useEffect(() => {
        if(logged_in){
            history.push("/")
        }
    }, [logged_in])

    return (
        <div className="center_page">
            <form>
                <FormHeader text={"Sign In"}/>

                <input type="email" placeholder="email" value={email} onChange={e => set_email(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => set_password(e.target.value)}/>

                <hr/>

                {errors &&
                    <div className="errors">
                        {errors.map(error => <p key={error}>{error}</p>)}
                    </div>
                }

                <button onClick={sign_in_action}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;