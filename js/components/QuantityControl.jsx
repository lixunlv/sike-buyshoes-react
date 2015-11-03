const React = require("react");
let QuantityControl = React.createClass({
    render: function() {
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
});

module.exports = QuantityControl;