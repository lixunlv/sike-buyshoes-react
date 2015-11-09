import EventEmitter from "events";
import dispatcher from "../components/Dispacher.jsx";
import CartStore from "./CartStore.jsx";
import _ from "lodash";

let UndoStore = (() => {
    let emitter = new EventEmitter();
    let history = [];

    let handleAction = dispatcher.register((action) => {
        if (action.type == "addCartItem" || action.type == "removeCartItem"
            || action.type == "updateCartItemQuantity")
            storeHistory();
    });

    function emitChange() {
        emitter.emit("change");
    }

    function storeHistory() {
        let cartItems = _.cloneDeep(CartStore.cartItems());

        console.log(cartItems);
        history.push(cartItems);
        emitChange();
    }

    return {
        handleFun() {
            return handleAction;
        },

        lastHistoryItems() {
            let item = history.pop();
            emitChange();
            return item;
        },

        hasUndo() {
            console.log(history.length);
            return history.length > 0;
        },

        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        }
    };
})();

export default UndoStore;
