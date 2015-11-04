import React from 'react';
import Data from '../data.js';
import Ps from 'perfect-scrollbar';
import CartItem from "./CartItem.jsx";
import CartStore from "../stores/CartStore.jsx";

export default class Cart extends React.Component {
    componentDidMount() {
        let $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);

        CartStore.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
        let cartItems = CartStore.getCartItems();
        let children = Object.keys(cartItems).map(key => {
            let item = cartItems[key];
            let p = Data.products[item['id']];
            let cartItem = {
                id : key,
                name: p['name'],
                imagePath: p['imagePath'],
                price: p['price'],
                quantity: item['quantity']
            };
            return (
                <CartItem item={cartItem} key={item['id']}/>
            )
        });

        return (
            <div className="cart__container">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" ref="content">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {children}
                </div>
            </div>
        );
    }
};

