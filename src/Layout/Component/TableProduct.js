import React from "react";
import ItemsBlock from "./Block/ItemsBlock";

import "./Style/TableProduct.scss";

export default function TableProduct() {

    const tableBody = [
        {id: 1, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 2, className: "fail", date: "22 Feb 2021", product: "Jordan 6 Retro Carmine (2021)", size: "10.0", website: "Footlocker UK", price: "$252", status: "fail"},
        {id: 3, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 4, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 5, className: "fail", date: "22 Feb 2021", product: "Jordan 6 Retro Carmine (2021)", size: "10.0", website: "Footlocker UK", price: "$252", status: "fail"},
        {id: 6, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 7, className: "fail", date: "22 Feb 2021", product: "Jordan 6 Retro Carmine (2021)", size: "10.0", website: "Footlocker UK", price: "$252", status: "fail"},
        {id: 8, className: "fail", date: "22 Feb 2021", product: "Jordan 6 Retro Carmine (2021)", size: "10.0", website: "Footlocker UK", price: "$252", status: "fail"},
        {id: 9, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 10, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
        {id: 11, className: "success", date: "22 Feb 2021", product: "Jordan 11 Retro Jubilee", size: "9.0", website: "Footlocker UK", price: "$211", status: "Success"},
    ]

    return(
        <div className="main-table-product-container">
            <ItemsBlock />
            <div className="main-table-product-content">
                <div className="main-table-product-box">
                    <div className="table-header-item">
                        <h5>DATE</h5>
                        <h5>PRODUCT</h5>
                        <h5>SIZE (US)</h5>
                        <h5>WEBSITE</h5>
                        <h5>PRICE</h5>
                        <h5>STATUS</h5>
                    </div>
                    <div className="table-body">
                        {tableBody.map((item) => <div className="table-body-item" key={item.id}>
                            <span>{item.date}</span>
                            <span>{item.product}</span>
                            <span>{item.size}</span>
                            <span>{item.website}</span>
                            <span>{item.price}</span>
                            <span className={item.className}>{item.status}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}