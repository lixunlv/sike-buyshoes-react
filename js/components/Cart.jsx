import React from 'react';
import Ps from 'perfect-scrollbar';
import CartItem from "./CartItem.jsx";
import CartStore from "../stores/CartStore.jsx";
import ProductStore from "../stores/ProductStore.jsx";
import UndoStore from "../stores/UndoStore.jsx";
import connect from "./connect.jsx";
import Action from "./Action.jsx";
//import ConnectedStore from "./ConnectedStore.jsx";
//import MakeConnectedComponent from "./MakeConnectedComponent.jsx";
//import Data from '../data.js';


class Cart extends React.Component {
    componentDidMount() {
        let $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
        //CartStore.addChangeListener(this.forceUpdate.bind(this));
    }

    undo() {
        Action.undoShoppingCart();
    }

    render() {
        //let cartItems = CartStore.getCartItems();
        console.log(this.props);
        let {cartItems, hasUndo} = this.props;
        let u = hasUndo ? <h3 className="cart__undo"><a onClick={this.undo}>undo</a></h3> : "";
        console.log(u);

        let children = Object.keys(cartItems).map(key => {
            let item = cartItems[key];
            let p = this.props.products[item['id']];
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
                {u}
            </div>
        );
    }
};

//export default class ConnectedCart extends React.Component {
//    render() {
//        return (
//            <ConnectedStore store={CartStore} propNames={['cartItems']}>
//                {propValues => <Cart {...propValues} />}
//            </ConnectedStore>
//        );
//    }
//}

//module.exports = MakeConnectedComponent(Cart,CartStore,"cartItems");

class ConnectedCart extends Cart {}

ConnectedCart = connect(CartStore, "cartItems")(ConnectedCart);
ConnectedCart = connect(ProductStore, "products")(ConnectedCart);
ConnectedCart = connect(UndoStore, "hasUndo")(ConnectedCart);

module.exports = ConnectedCart;
