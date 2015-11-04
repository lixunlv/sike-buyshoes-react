import EventEmitter from "events";
import Data from "../data.js";

let CartStore = (() => {
    let emitter = new EventEmitter();
    let _cartItems = {
        // "jameson-vulc": {
        //   id: "jameson-vulc",
        //   quantity: 1,
        // },
    };

    function emitChange() {
        emitter.emit("change");
    }

    return {
        // Reader methods
        getCartItems() {
            return _cartItems;
        },

        // Writer methods. These are the "actions".
        setCartItems(items) {
            _cartItems = items;
            emitChange();
        },

        updateCartItemQuantity(productId, quantity)
        {
            let carItem = _cartItems[productId];
            if (carItem) {
                carItem.quantity = quantity;
                if (carItem.quantity == 0)
                    delete _cartItems[productId];

                emitChange();
            }
        },

        addCartItem(productId) {
            let carItem = { id: productId, quantity: 1};
            _cartItems[productId] = carItem;
            emitChange();
        },

        removeCartItem(productId) {
            delete _cartItems[productId];
            emitChange();
        },

        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        }
    };
})();


module.exports = CartStore;