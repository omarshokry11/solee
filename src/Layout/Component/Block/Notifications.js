import React from "react";

import "./Style/Notifications.scss";

export default function Notifications() {

    const items = [
        {id: 1, className: "item-notification active-notification", icon: "fas fa-check-circle check", h6: "Transfer link confirmed", span: "by jamesconor@gmail.com", time: "Just now"},
        {id: 2, className: "item-notification active-notification", icon: "fas fa-check-circle check", h6: "Transfer link confirmed", span: "by jamesconor2142@gmail.com", time: "2 min ago"},
        {id: 3, className: "item-notification", icon: "fas fa-envelope", h6: "Confirmation email sent", span: "by Anthony 2142@gmail.com and jamesconor@gmail.com", time: "5 min ago"},
    ]

    return(
        <div className="main-notifications-container">
            <h4>Notifications</h4>
            {items.map((item) => <div className={item.className} key={item.id}>
                <div className="icon-notification">
                    <i className={item.icon}> </i>
                </div>
                <div className="details-notification">
                    <h6>{item.h6} <span>{item.span}</span><span className="time">{item.time}</span></h6>
                </div>
            </div>)}
        </div>
    )
}