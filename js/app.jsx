let products = {

    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man",
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man",
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man",
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man",
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman",
    },
};

let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2,
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1,
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1,
    },
};

let SiteTitle = React.createClass({
    render() {
        return (
            <div className="title">
                <h2>Buy Me Shoes</h2>
                <img className="title__heart" src="img/heart.svg"/>
            </div>
        );
    }
});

let Products = React.createClass({
    render() {

        let children = Object.keys(products).map(key => {
            return (
                <Product product={products[key]} key={key}/>
            )
        });

        return (
            <div className="products">
                {children}
            </div>

        );
    }
});

let Product = React.createClass({
    render: function() {
        let {id, name, price, imagePath} = this.props.product;

        let addIcon =
            <a className="product__add">
                <img className="product__add__icon" src="img/cart-icon.svg" />
            </a>;

        if (cartItems[id]) {
            let cartItem = {
                name: name,
                imagePath: imagePath,
                price: price,
                quantity: cartItems[id]['quantity']
            };
            addIcon = <QuantityControll item={cartItem} variant="gray" />
        }

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
                    <img className="product__heart" src="img/heart.svg" />
                </div>
            </div>
        );
    }
});

let Cart = React.createClass({
    componentDidMount() {
        let $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render() {
        let children = Object.keys(cartItems).map(key => {
            let item = cartItems[key];
            let p = products[item['id']];
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

let CartItem = React.createClass({
    render: function() {
        let {name, imagePath, price, quantity} = this.props.item;

        return (
            <div className="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img src={imagePath} />
                    </div>
                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">
                            {name}
                        </div>
                        <div className="cart-item__price">
                            {'$ ' + price + (quantity > 1 ? ' x ' + quantity : '')}
                        </div>
                    </div>
                    <img className="cart-item__trash" src="img/trash-icon.svg" />
                </div>
                {/* cart-item__top-part */}
                <div className="cart-item__qty">
                    <QuantityControll item={this.props.item}/>
                </div>
            </div>
        );
    }
});

let QuantityControll = React.createClass({
    render: function() {
        let {quantity} = this.props.item;
        let className = this.props.variant ?
            "adjust-qty adjust-qty--gray" : "adjust-qty";

        return (
            <div className={className}>
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>
        );
    }
});

let Checkout = React.createClass({
    render: function() {
        let total = Object.keys(cartItems).reduce((previousValue, key, index, array) => {
            let item = cartItems[key];
            let p = products[item['id']];

            return previousValue + p['price'] * item['quantity'];
        }, 0);

        return (

            <div className="checkout__container">
                <hr className="checkout__divider" />
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>
                    <div className="checkout__line__amount">
                        {'$ ' + total}
                    </div>
                </div>
                <a className="checkout__button">
                    <img className="checkout__button__icon" src="img/cart-icon.svg" />
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>
            </div>
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


window.onload = () => {

    React.render(<SiteTitle/>,document.querySelector(".site__left-sidebar"));
    React.render(<Products/>,document.querySelector(".site__content"));
    React.render(<Cart/>, document.querySelector(".cart"));
    React.render(<Checkout/>,document.querySelector(".checkout"));
};


