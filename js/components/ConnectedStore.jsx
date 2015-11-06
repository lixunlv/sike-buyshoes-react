import React from "react";
// This component should re-render whenever its store emits the "change" event.
export default class ConnectedStore extends React.Component {

    componentDidMount() {
        this.props.store.addChangeListener(this.forceUpdate.bind(this));
    }

    render() {
        // The `children` property is a function.
        let contentRenderFunction = this.props.children;

        // 1. Read all the data from store by calling reader methods dynamically.
        // 2. Pass the data to `contentRenderFunction`.
        let storeProps = {};

        this.props.propNames.forEach((name) => {
            storeProps[name] = this.props.store[name]();
        });

        return contentRenderFunction(storeProps);
    }
}