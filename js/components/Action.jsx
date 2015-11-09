import dispatcher from './Dispacher.jsx';
import UndoStore from "../stores/UndoStore.jsx";

function addCartItem(productId) {
    dispatcher.dispatch({type: 'addCartItem', productId: productId});
}

function removeCartItem(productId) {
    dispatcher.dispatch({type: 'removeCartItem', productId: productId});
}

function updateCartItemQuantity(productId, quantity) {
    dispatcher.dispatch({type: 'updateCartItemQuantity', productId: productId, quantity: quantity});
}

function toggleLikeItem(productId) {
    dispatcher.dispatch({type: 'toggleLikeItem', productId: productId});
}

function toggleShowOnlyLike() {
    dispatcher.dispatch({type: 'toggleShowOnlyLike'});
}

function undoShoppingCart() {
    let cartItems = UndoStore.lastHistoryItems();
    dispatcher.dispatch({type: "undoShoppingCart", cartItems: cartItems})
}

module.exports = {
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
    updateCartItemQuantity: updateCartItemQuantity,
    toggleLikeItem: toggleLikeItem,
    toggleShowOnlyLike: toggleShowOnlyLike,
    undoShoppingCart: undoShoppingCart
};