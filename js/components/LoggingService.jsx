import dispatcher from "./Dispacher.jsx";

module.exports = function enableLogging() {
    dispatcher.register((action) => {
        console.log(JSON.stringify({
            timestamp: new Date(),
            action
        },undefined,2));
    })
}