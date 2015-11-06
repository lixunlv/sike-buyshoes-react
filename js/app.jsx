import React from "react";
import SiteTitle from "./components/SiteTitle.jsx";
import Products from "./components/Products.jsx";
import Cart from './components/Cart.jsx';
import Checkout from "./components/Checkout.jsx";

window.onload = () => {
    React.render(<SiteTitle/>,document.querySelector(".site__left-sidebar"));
    React.render(<Products/>,document.querySelector(".site__content"));
    React.render(<Cart/>, document.querySelector(".cart"));
    React.render(<Checkout/>,document.querySelector(".checkout"));

};


