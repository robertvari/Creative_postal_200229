import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import {useHistory} from "react-router-dom"
import FormHeader from "../widgets/FormHeader";

function Logout(props) {
    const {log_out_user} = useContext(UserContext)
    const history = useHistory()

    const log_out_action = () => {
        log_out_user()
        history.push("/")
    }

    return (
        <div className="center_page">
            <form>
                <FormHeader text={"Sign Out"}/>

                <h2>Are you sure you want to leave? :(</h2>

                <hr/>
                <button onClick={log_out_action}>Sign Out</button>
            </form>
        </div>
    );
}

export default Logout;