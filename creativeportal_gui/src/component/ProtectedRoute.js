import React, {useContext, useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {UserContext} from "./context/UserContext";

function ProtectedRoute({component: Component, ...rest}) {
    const {logged_in, check_token} = useContext(UserContext)
    const [wait, set_wait] = useState(true)

    useEffect(() => {
        check_token()
        set_wait(false)
    }, [])

    if(wait){
        return null
    }

    return (
        <Route {...rest} render={
            props => {
                if(logged_in){
                    return <Component {...props}/>
                }else{
                    return <Redirect to={"/user/login"}/>
                }
            }
        }/>
    );
}

export default ProtectedRoute;