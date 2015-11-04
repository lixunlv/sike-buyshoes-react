import React from "react";
import Data from "../data.js";
import QuantityControl from "./QuantityControl.jsx";
import CartStore from "../stores/CartStore.jsx";

export default class Product extends React.Component {
    componentDidMount() {
        CartStore.addChangeListener(this.forceUpdate.bind(this));
    }

    onClick(e) {
        let {id} = this.props.product;
        CartStore.addCartItem(id);
    }

    render() {
        let {id, name, price, imagePath} = this.props.product;

        let addIcon =
            <a className="product__add" onClick={this.onClick.bind(this)}>
                <img className="product__add__icon" src="img/cart-icon.svg" />
            </a>;

        var cartItems = CartStore.getCartItems();
        if (cartItems[id]) {
            let cartItem = {
                id: id,
                name: name,
                imagePath: imagePath,
                price: price,
                quantity: cartItems[id]['quantity']
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

