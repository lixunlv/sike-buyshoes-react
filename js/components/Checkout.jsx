import React from 'react';
import Data from '../data.js';

export default class Checkout extends React.Component {
    render() {
        let total = Object.keys(Data.cartItems).reduce((previousValue, key, index, array) => {
            let item = Data.cartItems[key];
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
                        {'$ ' + total}
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
