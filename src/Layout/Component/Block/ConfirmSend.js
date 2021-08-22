import React, {useState} from "react";

import "./Style/ConfirmSend.scss";

export default function ConfirmSend() {

    const [show, setShow] = useState();

    return(
        <>
            {show ? null : <div className="main-confirm-send-container">
                <div className="icon-times">
                    <i className="fas fa-times" onClick={() => setShow(!show)}> </i>
                </div>
                <div className="icon">
                    <i className="fas fa-envelope-open-text"> </i>
                </div>
                <div className="details">
                    <h4>Confirmation Email Sent</h4>
                    <p>We sent a link to <a href="/">anthony2142@gmail.com</a> and  <a href="/">anthony2142@gmail.com</a>. Click the email to confirm the transfer</p>
                </div>
                <div className="send-code">
                    <p className="one">Didn't get a confirmation email?</p>
                    <p>Check your spam or <span>Send Again</span></p>
                </div>
            </div>}
        </>
    )
}