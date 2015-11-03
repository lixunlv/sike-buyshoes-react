const React = require("react");
const SiteTitle = require("./components/SiteTitle.jsx")
const Products = require("./components/Products.jsx")
const Cart = require("./components/Cart.jsx")
const Checkout = require("./components/Checkout.jsx")

window.onload = () => {
    React.render(<SiteTitle/>,document.querySelector(".site__left-sidebar"));
    React.render(<Products/>,document.querySelector(".site__content"));
    React.render(<Cart/>, document.querySelector(".cart"));
    React.render(<Checkout/>,document.querySelector(".checkout"));
};


