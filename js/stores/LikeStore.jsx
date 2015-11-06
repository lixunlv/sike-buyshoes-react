import EventEmitter from "events";

let LikeStore = (() => {
    let emitter = new EventEmitter();

    let _likeItems = { };

    function emitChange() {
        emitter.emit("change");
    }

    return {
        likeItems() {
            return _likeItems;
        },

        toggleLikeItem(productId) {
            if (_likeItems[productId])
                delete _likeItems[productId];
            else
                _likeItems[productId] = true;

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

module.exports = LikeStore;
