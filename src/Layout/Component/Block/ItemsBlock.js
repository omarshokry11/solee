import React from "react";

import "./Style/ItemsBlock.scss";

export default function ItemsBlock() {
    return(
        <div className="main-item-block-container">
            <div className="item item-1">
                <h6>Filter by : </h6>
                <div className="history">
                    <span>1D</span>
                    <span className="month">1M</span>
                    <span>1Y</span>
                </div>
            </div>
            <div className="item item-2">
                <div className="details">
                    <h6>Total Checkouts</h6>
                    <p>
                        <strong>72</strong>
                        <small> / 82</small>
                    </p>
                </div>
                <div className="icon-1 icon">
                    <i className="fas fa-shopping-cart"> </i>
                </div>
            </div>
            <div className="item item-2">
                <div className="details">
                    <h6>Total Failure</h6>
                    <p>
                        <strong className="number">10</strong>
                        <small> / 82</small>
                    </p>
                </div>
                <div className="icon icon-2">
                    <i className="fas fa-shopping-cart icon-1"> </i>
                </div>
            </div>
        </div>
    )
}