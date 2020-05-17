import React, {createContext, useState} from "react"
import axios from 'axios'
import {useCookies} from "react-cookie";

export const UserContext = createContext(true)


export const UserProvider = (props) => {
    const [cookies, setCookies, removeCookies] = useCookies(["token"])

    const [logged_in, set_logged_in] = useState(null)
    const [errors, set_errors] = useState([])
    const API_URL = process.env.REACT_APP_API_URL

    const validate_email = (email) => {
        if(email.length === 0){
            set_errors(["Email is required"])
            return false
        }

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            set_errors(["Email is not valid"])
            return false
        }

        return true
    }

    const check_passwords = (password, password2) => {
        if(password.length === 0){
            set_errors(["You must set a password"])
            return false
        }

        if(password.length < 6){
            set_errors(["Password is to short"])
            return false
        }

        if(password !== password2){
            set_errors(["Passwords has to match"])
            return false
        }

        return true
    }

    const log_in_user = async (email, password) => {
        try{
            const res =  await axios({
                method: "post",
                url: `${API_URL}auth/login/`,
                data: {
                    email: email,
                    password: password
                }
            })

            const token = res.data.key
            set_logged_in(token)
            setCookies("token", token, {path: "/", sameSite:"strict", maxAge: 86400})
        }catch (e) {
            set_errors(["Invalid credentials"])
        }
    }

    const register_user = (email, password) => {
        axios({
            method: "post",
            url: `${API_URL}auth/registration/`,
            data: {
                email: email,
                password1: password,
                password2: password
            }
        })
    }

    const log_out_user = () => {
        removeCookies("token", {path: "/"})
        set_logged_in(null)
    }

    const check_token = () => {
        if(cookies.token){
            set_logged_in(cookies.token)
        }
    }

    return (
        <UserContext.Provider value={
            {
                logged_in:logged_in,
                set_logged_in:set_logged_in,

                errors: errors,
                set_errors: set_errors,

                log_in_user: log_in_user,
                validate_email: validate_email,
                check_token: check_token,
                log_out_user: log_out_user,
                register_user: register_user,
                check_passwords: check_passwords
            }
        }>

        {props.children}

        </UserContext.Provider>
    )
}