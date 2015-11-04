const EventEmitter = require("events");

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
        addCartItem(productId) {

        },

        removeCartItem(productId) {

        },

        setCartItems(items) {
            _cartItems = items;
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