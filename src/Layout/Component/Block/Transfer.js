import React, {useState} from "react";
import ConfirmSend from "./ConfirmSend";

import "./Style/Transfer.scss";

export default function Transfer() {

    const [send, setSend] = useState();
    const [cancel, setCancel] = useState();

    return(
        <>
            {cancel ? null : <div className="main-transfer-container">
                <h2>Transfer</h2>
                <div className="form">
                    <label>Transfer to</label>
                    <input type="text" placeholder="Enter the email address"/>
                </div>
                <div className="buttons">
                    <button className="btn-1" onClick={() => setCancel(!cancel)}>Cancel</button>
                    <button className="btn-2" onClick={() => setSend(!send)}>Send</button>
                    {send ? <ConfirmSend/> : null}
                </div>
            </div>}
        </>
    )
}