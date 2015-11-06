import React from 'react';
import ConnectedStore from "./ConnectedStore.jsx";

function MakeConnectedComponent(ViewComponent,store,...propNames) {
    // Note: The argument "ViewComponent" must be uppercase. Why?

    // TODO: Define ConnectedViewComponent
    class ConnectedViewComponent extends React.Component {
        render() {
            return(
                <ConnectedStore store={store} propNames={propNames}>
                    {propValues => <ViewComponent {...propValues} {...this.props} />}
                </ConnectedStore>
            );
        }
    }

    // Return the component
    return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;