import React from "react";
import Data from "../data.js";
import Product from "./Product.jsx";

export default class Products extends React.Component {
    render() {

        let children = Object.keys(Data.products).map(key => {
            return (
                <Product product={Data.products[key]} key={key}/>
            )
        });

        return (
            <div className="products">
                {children}
            </div>

        );
    }
};
