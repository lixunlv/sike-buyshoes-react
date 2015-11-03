const React = require("react");
const CartItem = require("./CartItem.jsx");
const Data = require("../data.js");
const Ps = require("perfect-scrollbar")

let Cart = React.createClass({
    componentDidMount() {
        let $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render() {
        let children = Object.keys(Data.cartItems).map(key => {
            let item = Data.cartItems[key];
            let p = Data.products[item['id']];
            let cartItem = {
                name: p['name'],
                imagePath: p['imagePath'],
                price: p['price'],
                quantity: item['quantity']
            }
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
});

module.exports = Cart;
