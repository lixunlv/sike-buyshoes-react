import React from "react";
import Data from "../data.js";
import QuantityControl from "./QuantityControl.jsx";

export default class Product extends React.Component {
    render() {
        let {id, name, price, imagePath} = this.props.product;

        let addIcon =
            <a className="product__add">
                <img className="product__add__icon" src="img/cart-icon.svg" />
            </a>;

        if (Data.cartItems[id]) {
            let cartItem = {
                name: name,
                imagePath: imagePath,
                price: price,
                quantity: Data.cartItems[id]['quantity']
            };
            addIcon = <QuantityControl item={cartItem} variant="gray" />
        }

        return (
            <div className="product">
                <div className="product__display">
                    <div className="product__img-wrapper">
                        <img className="product__img" src={imagePath} />
                    </div>
                    <div className="product__control">
                        {addIcon}
                    </div>
                    <div className="product__price">
                        {'$ ' + price}
                    </div>
                </div>
                <div className="product__description">
                    <div className="product__name">
                        {name}
                    </div>
                    <img className="product__heart" src="img/heart.svg" />
                </div>
            </div>
        );
    }
};

