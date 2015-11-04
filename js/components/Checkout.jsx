import React from 'react';
import Data from '../data.js';
import CartStore from '../stores/CartStore.jsx';

export default class Checkout extends React.Component {
    componentDidMount() {
        CartStore.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
        let cartItems = CartStore.getCartItems();
        let total = Object.keys(cartItems).reduce((previousValue, key, index, array) => {
            let item = cartItems[key];
            let p = Data.products[item['id']];

            return previousValue + p['price'] * item['quantity'];
        }, 0);

        return (

            <div className="checkout__container">
                <hr className="checkout__divider" />
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                {
                    //<div className="checkout__line">
                    //    <div className="checkout__line__label">
                    //        Discount
                    //    </div>
                    //    <div className="checkout__line__amount">
                    //        -$90
                    //    </div>
                    //</div>
                }

                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>
                    <div className="checkout__line__amount">
                        {'$ ' + total.toFixed(2)}
                    </div>
                </div>
                {
                    //<div className="checkout__line">
                    //    <div className="checkout__line__amount checkout__line__amount--omg-savings">
                    //        {'$ ' + total}
                    //    </div>
                    //</div>
                }
                <a className="checkout__button">
                    <img className="checkout__button__icon" src="img/cart-icon.svg" />
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>
            </div>
        );
    }
};
