import React from 'react';
import FormHeader from "../widgets/FormHeader";

function ConfirmEmail(props) {
    return (
        <div className="center_page">
            <form >
                <FormHeader text={"Email Confirmation"}/>

                <h2>Thank you for registration. We sent ou an email in which you'll find further instructions.</h2>
            </form>
        </div>
    );
}

export default ConfirmEmail;