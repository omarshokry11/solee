import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Transfer from "./Block/Transfer";

import "./Style/HomeDetails.scss";

export default function HomeDetails() {

    const [send, setSend] = useState();

    return(
        <div className="main-home-details-container">
            <div className="item-details">
                <div className="item item-1">
                    <h6>License Key</h6>
                    <div className="code">
                        <span>xxxx - xxxx - xxxx - xxxx</span>
                        <span className="icon">
                            <i className="fas fa-eye-slash"> </i>
                        </span>
                    </div>
                    <div className="buttons">
                        <button className="button-1" onClick={() => setSend(!send)}>Renew Now <strong>Stripe</strong></button>
                        <button className="button-2">Deactive</button>
                    </div>
                    {send ?<Transfer/> : null}
                    <p>
                        <small>Next Renewal on <strong>22 mar 2021</strong></small>
                    </p>
                </div>
                <div className="item item-2">
                    <div className="details">
                        <div className="title">
                            <i className="fab fa-discord"> </i>
                            <span>Discord ID</span>
                        </div>
                        <h6>antony#2142</h6>
                    </div>
                    <button>Unbind</button>
                </div>
                <div className="item item-2">
                    <div className="details">
                        <div className="title">
                            <i className="fab fa-discord"> </i>
                            <span>Discord ID</span>
                        </div>
                        <p>Current Email</p>
                        <h6>antony#2142@gmail.com</h6>
                    </div>
                    <button className="btn-2">Transfer to <i className="fas fa-chevron-right"> </i></button>
                </div>
                <div className="item item-3">
                    <div className="item-icon">
                        <Image src="/desktop.png" />
                    </div>
                    <div className="buttons">
                        <button className="item-3-btn"><i className="fab fa-apple"> </i> Download for MacOS</button>
                        <button className="item-3-btn"><i className="fab fa-windows"> </i> Download for Windows</button>
                    </div>
                </div>
            </div>
        </div>
    )
}