import React from "react";

export default class QuantityControl extends React.Component {
    render() {
        let {quantity} = this.props.item;
        let className = this.props.variant ?
            "adjust-qty adjust-qty--gray" : "adjust-qty";

        return (
            <div className={className}>
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>
        );
    }
};
