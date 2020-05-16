import React, {createContext, useState} from "react"
import axios from 'axios'
export const UserContext = createContext(true)

export const UserProvider = (props) => {
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

            set_logged_in(res.data.key)
        }catch (e) {
            set_errors(["Invalid credentials"])
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
                validate_email: validate_email
            }
        }>

        {props.children}

        </UserContext.Provider>
    )
}