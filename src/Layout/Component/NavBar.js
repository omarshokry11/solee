import React, {useState} from "react";
import {Image} from "react-bootstrap";
import Notifications from "./Block/Notifications";

import "./Style/NavBar.scss";

export default function NavBar() {

    const [click, SetClick] = useState();

    return(
        <div className="main-navbar-container">
            <div className="item-profile">
                <div className="user">
                    <div className={click ? "active" : "notification"} onClick={() => SetClick(!click)}>
                        <i className="fas fa-bell"> </i>
                        <span> </span>
                    </div>
                    {click ? <Notifications/> : null}
                    <div className="user-img">
                        <Image src="/user.png" />
                    </div>
                    <div className="user-details">
                        <h4>Anthony Mike</h4>
                        <span>anthony2142@gmail.com</span>
                    </div>
                </div>
                <div className="icon">
                    <i className="fas fa-chevron-down"> </i>
                </div>
            </div>
        </div>
    )
}