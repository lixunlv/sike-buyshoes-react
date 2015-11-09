import EventEmitter from "events";
import dispatcher from "../components/Dispacher.jsx";
import UndoStore from "./UndoStore.jsx";

let CartStore = (() => {
    let emitter = new EventEmitter();
    let _cartItems = {};

    let handleAction = dispatcher.register((action) => {
            dispatcher.waitFor([UndoStore.handleFun()]);
            console.log('cart');
            if (action.type == "addCartItem")
                addCartItem(action.productId);

            if (action.type == "removeCartItem")
                removeCartItem(action.productId);

            if (action.type == "updateCartItemQuantity")
                updateCartItemQuantity(action.productId, action.quantity);

            if (action.type == "undoShoppingCart")
                undoShoppingCart(action.cartItems);
        }
    );

    function addCartItem(productId) {
        let carItem = {id: productId, quantity: 1};
        _cartItems[productId] = carItem;
        emitChange();
    }

    function removeCartItem(productId) {
        delete _cartItems[productId];
        emitChange();
    }

    function updateCartItemQuantity(productId, quantity) {
        let carItem = _cartItems[productId];
        if (carItem) {
            carItem.quantity = quantity;
            if (carItem.quantity == 0)
                delete _cartItems[productId];

            emitChange();
        }
    }

    function undoShoppingCart(cartItems) {
        _cartItems = cartItems;
        emitChange();
    }

    function emitChange() {
        emitter.emit("change");
    }


    return {
        handleFun() {
            return handleAction;
        },

        cartItems() {
            return _cartItems;
        },

        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        }
    };
})();

export default CartStore;
