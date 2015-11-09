import EventEmitter from "events";
import dispatcher from "../components/Dispacher.jsx";

let LikeStore = (() => {
    let emitter = new EventEmitter();
    let _likeItems = {};

    dispatcher.register((action) => {
        if (action.type == "toggleLikeItem")
            toggleLikeItem(action.productId);
    });

    function toggleLikeItem(productId) {
        if (_likeItems[productId])
            delete _likeItems[productId];
        else
            _likeItems[productId] = true;

        emitChange();
    }

    function emitChange() {
        emitter.emit("change");
    }

    return {
        likeItems() {
            return _likeItems;
        },

        addChangeListener(callback) {
            emitter.addListener("change", callback)
        },

        removeChangeListener(callback) {
            emitter.removeListener("change", callback)
        }
    }

})();

module.exports = LikeStore;
