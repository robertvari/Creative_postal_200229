import React, {createContext, useState} from "react"

export const UserContext = createContext(true)

export const UserProvider = (props) => {
    const [logged_in, set_logged_in] = useState(true)

    return (
        <UserContext.Provider value={
            {
                logged_in:logged_in,
                set_logged_in:set_logged_in
            }
        }>

        {props.children}

        </UserContext.Provider>
    )
}