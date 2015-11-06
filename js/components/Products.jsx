import React from "react";
import Product from "./Product.jsx";
import CartStore from "../stores/CartStore.jsx";
import LikeStore from "../stores/LikeStore.jsx";
import ProductStore from "../stores/ProductStore.jsx";
import connect from "./connect.jsx";
//import ConnectedStore from "./ConnectedStore.jsx";
//import MakeConnectedComponent from "./MakeConnectedComponent.jsx";

export default class Products extends React.Component {
    render() {
        let products = this.props.filteredProducts;
        let children = Object.keys(products).map(key => {
            return (
                <Product product={products[key]} key={key} {...this.props} />
            )
        });

        return (
            <div className="products">
                {children}
            </div>

        );
    }
}

//export default class ConnectedProducts extends React.Component {
//    render() {
//        return (
//            <ConnectedStore store={CartStore} propNames={['cartItems']}>
//                {propsOfStore1 => {
//                    return (
//                        <ConnectedStore store={LikeStore} propNames={['likeItems']}>
//                            {propsOfStore2 => {
//                                return (
//                                    <Products {...propsOfStore1} {...propsOfStore2} />
//                                );
//                            }}
//                        </ConnectedStore>
//                    );
//                }}
//            </ConnectedStore>
//        );
//    }
//}

//module.exports = MakeConnectedComponent(MakeConnectedComponent(MakeConnectedComponent(Products, CartStore, "cartItems"), LikeStore, "likeItems"), ProductStore, "filteredProducts" );

class ConnectedProducts extends Products {}


ConnectedProducts = connect(LikeStore, "likeItems")(ConnectedProducts);
ConnectedProducts = connect(CartStore, "cartItems")(ConnectedProducts);
ConnectedProducts = connect(ProductStore, "filteredProducts")(ConnectedProducts);

module.exports = ConnectedProducts;