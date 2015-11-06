import React from "react";
import Data from "../data.js";
import QuantityControl from "./QuantityControl.jsx";
import CartStore from "../stores/CartStore.jsx";
import LikeStore from "../stores/LikeStore.jsx";

export default class Product extends React.Component {
    componentDidMount() {
        //CartStore.addChangeListener(this.forceUpdate.bind(this));
    }

    onClick(e) {
        let {id} = this.props.product;
        CartStore.addCartItem(id);
    }

    likeOnClick(e) {
        let {id} = this.props.product;
        LikeStore.toggleLikeItem(id);
    }

    render() {
        let {id, name, price, imagePath} = this.props.product;
        let {cartItems, likeItems} = this.props;

        let addIcon =
            <a className="product__add" onClick={this.onClick.bind(this)}>
                <img className="product__add__icon" src="img/cart-icon.svg" />
            </a>;

        //var cartItems = CartStore.getCartItems();
        if (cartItems && cartItems[id]) {
            let cartItem = {
                id: id,
                name: name,
                imagePath: imagePath,
                price: price,
                quantity: cartItems[id]['quantity']
            };
            addIcon = <QuantityControl item={cartItem} variant="gray" />
        }

        let heart = likeItems && likeItems[id] ? "img/heart-liked.svg" : "img/heart.svg";

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
                    <img className="product__heart" src={heart} onClick={this.likeOnClick.bind(this)} />
                </div>
            </div>
        );
    }
};



