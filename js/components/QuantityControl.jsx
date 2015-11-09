import React from "react";
import Action from "./Action.jsx";

export default class QuantityControl extends React.Component {
    subOnClick(e) {
        let {id, quantity} = this.props.item;
        Action.updateCartItemQuantity(id, quantity -1);
    }

    addOnClick(e) {
        let {id, quantity} = this.props.item;
        Action.updateCartItemQuantity(id, quantity + 1);
    }
    render() {
        let {quantity} = this.props.item;
        let className = this.props.variant ?
            "adjust-qty adjust-qty--gray" : "adjust-qty";

        return (
            <div className={className}>
                <a className="adjust-qty__button" onClick={this.subOnClick.bind(this)}>-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button" onClick={this.addOnClick.bind(this)}>+</a>
            </div>
        );
    }
};
