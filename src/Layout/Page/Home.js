import React from "react";
import NavBar from "../Component/NavBar";
import TableProduct from "../Component/TableProduct";
import HomeDetails from "../Component/HomeDetails";

import "./Style/Home.scss";

export default function Home() {
    return(
        <div className="main-home-container">
            <NavBar />
            <div className="home-content">
                <div className="home-table">
                    <TableProduct />
                </div>
                <div className="home-details">
                    <HomeDetails />
                </div>
            </div>
        </div>
    )
}