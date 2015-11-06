import React from 'react';
import ProductStore from "../stores/ProductStore.jsx";
import CartStore from '../stores/CartStore.jsx';
import connect from "./connect.jsx";

class Checkout extends React.Component {
    componentDidMount() {
        //CartStore.addChangeListener(this.forceUpdate.bind(this));
    }
    render() {
        let {cartItems, products} = this.props;
        let total = Object.keys(cartItems).reduce((previousValue, key, index, array) => {
            let item = cartItems[key];
            let p = products[item['id']];

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

class ConnectedCheckout extends Checkout {}

ConnectedCheckout = connect(CartStore, "cartItems")(ConnectedCheckout);
ConnectedCheckout = connect(ProductStore, "products")(ConnectedCheckout);

module.exports = ConnectedCheckout;
