import EventEmitter from "events";
import LikeStore from "./LikeStore.jsx";
import Data from "../data.js";

let ProductStore = (() => {
    let emitter = new EventEmitter();

    let _products = Data.products;
    let _showOnlyLike = false;

    function emitChange() {
        emitter.emit("change");
    }

    return {
        products() {
            return _products;
        },

        filteredProducts() {
            if (!_showOnlyLike)
                return _products;

            let result = {};
            Object.keys(LikeStore.likeItems()).forEach((id)=> {
                console.log(id);
                result[id] = _products[id];
            });

            return result;
        },

        showOnlyLike() {
            return _showOnlyLike;
        },

        toggleShowOnlyLike() {
            _showOnlyLike = !_showOnlyLike;
            emitChange();
        },

        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        }
    }

})();

module.exports = ProductStore;
