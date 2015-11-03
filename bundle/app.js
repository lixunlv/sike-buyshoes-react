"use strict";

var products = {

    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man"
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man"
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man"
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man"
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman"
    }
};

var cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1
    }
};

var SiteTitle = React.createClass({
    displayName: "SiteTitle",

    render: function render() {
        return React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "h2",
                null,
                "Buy Me Shoes"
            ),
            React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
        );
    }
});

var Products = React.createClass({
    displayName: "Products",

    render: function render() {

        var children = Object.keys(products).map(function (key) {
            return React.createElement(Product, { product: products[key], key: key });
        });

        return React.createElement(
            "div",
            { className: "products" },
            children
        );
    }
});

var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        var _props$product = this.props.product;
        var id = _props$product.id;
        var name = _props$product.name;
        var price = _props$product.price;
        var imagePath = _props$product.imagePath;

        var addIcon = React.createElement(
            "a",
            { className: "product__add" },
            React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
        );

        if (cartItems[id]) {
            var cartItem = {
                name: name,
                imagePath: imagePath,
                price: price,
                quantity: cartItems[id]['quantity']
            };
            addIcon = React.createElement(QuantityControll, { item: cartItem, variant: "gray" });
        }

        return React.createElement(
            "div",
            { className: "product" },
            React.createElement(
                "div",
                { className: "product__display" },
                React.createElement(
                    "div",
                    { className: "product__img-wrapper" },
                    React.createElement("img", { className: "product__img", src: imagePath })
                ),
                React.createElement(
                    "div",
                    { className: "product__control" },
                    addIcon
                ),
                React.createElement(
                    "div",
                    { className: "product__price" },
                    '$ ' + price
                )
            ),
            React.createElement(
                "div",
                { className: "product__description" },
                React.createElement(
                    "div",
                    { className: "product__name" },
                    name
                ),
                React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
            )
        );
    }
});

var Cart = React.createClass({
    displayName: "Cart",

    componentDidMount: function componentDidMount() {
        var $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render: function render() {
        var children = Object.keys(cartItems).map(function (key) {
            var item = cartItems[key];
            var p = products[item['id']];
            var cartItem = {
                name: p['name'],
                imagePath: p['imagePath'],
                price: p['price'],
                quantity: item['quantity']
            };
            return React.createElement(CartItem, { item: cartItem, key: item['id'] });
        });

        return React.createElement(
            "div",
            { className: "cart__container" },
            React.createElement(
                "h3",
                { className: "cart__title" },
                "Shopping Cart"
            ),
            React.createElement(
                "div",
                { className: "cart__content", ref: "content" },
                React.createElement(
                    "h3",
                    { className: "cart__title cart__title--spacer" },
                    "Shopping Cart"
                ),
                children
            )
        );
    }
});

var CartItem = React.createClass({
    displayName: "CartItem",

    render: function render() {
        var _props$item = this.props.item;
        var name = _props$item.name;
        var imagePath = _props$item.imagePath;
        var price = _props$item.price;
        var quantity = _props$item.quantity;

        return React.createElement(
            "div",
            { className: "cart-item" },
            React.createElement(
                "div",
                { className: "cart-item__top-part" },
                React.createElement(
                    "div",
                    { className: "cart-item__image" },
                    React.createElement("img", { src: imagePath })
                ),
                React.createElement(
                    "div",
                    { className: "cart-item__top-part__middle" },
                    React.createElement(
                        "div",
                        { className: "cart-item__title" },
                        name
                    ),
                    React.createElement(
                        "div",
                        { className: "cart-item__price" },
                        '$ ' + price + (quantity > 1 ? ' x ' + quantity : '')
                    )
                ),
                React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
            ),
            React.createElement(
                "div",
                { className: "cart-item__qty" },
                React.createElement(QuantityControll, { item: this.props.item })
            )
        );
    }
});

var QuantityControll = React.createClass({
    displayName: "QuantityControll",

    render: function render() {
        var quantity = this.props.item.quantity;

        var className = this.props.variant ? "adjust-qty adjust-qty--gray" : "adjust-qty";

        return React.createElement(
            "div",
            { className: className },
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "-"
            ),
            React.createElement(
                "div",
                { className: "adjust-qty__number" },
                quantity
            ),
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "+"
            )
        );
    }
});

var Checkout = React.createClass({
    displayName: "Checkout",

    render: function render() {
        var total = Object.keys(cartItems).reduce(function (previousValue, key, index, array) {
            var item = cartItems[key];
            var p = products[item['id']];

            return previousValue + p['price'] * item['quantity'];
        }, 0);

        return React.createElement(
            "div",
            { className: "checkout__container" },
            React.createElement("hr", { className: "checkout__divider" }),
            React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
            React.createElement(
                "div",
                { className: "checkout__line" },
                React.createElement(
                    "div",
                    { className: "checkout__line__label" },
                    "Subtotal"
                ),
                React.createElement(
                    "div",
                    { className: "checkout__line__amount" },
                    '$ ' + total
                )
            ),
            React.createElement(
                "a",
                { className: "checkout__button" },
                React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
                React.createElement(
                    "div",
                    { className: "checkout__button__label" },
                    "Checkout"
                )
            )
        );
    }
});

//<div className="checkout__line">
//    <div className="checkout__line__label">
//        Discount
//    </div>
//    <div className="checkout__line__amount">
//        -$90
//    </div>
//</div>
//<div className="checkout__line">
//    <div className="checkout__line__amount checkout__line__amount--omg-savings">
//        {'$ ' + total}
//    </div>
//</div>

window.onload = function () {

    React.render(React.createElement(SiteTitle, null), document.querySelector(".site__left-sidebar"));
    React.render(React.createElement(Products, null), document.querySelector(".site__content"));
    React.render(React.createElement(Cart, null), document.querySelector(".cart"));
    React.render(React.createElement(Checkout, null), document.querySelector(".checkout"));
};
/* cart-item__top-part */
