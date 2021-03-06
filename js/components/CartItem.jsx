import React from 'react';
import QuantityControl from './QuantityControl.jsx';
import Action from './Action.jsx';

export default class CartItem extends React.Component {
    trashOnClick(e) {
        Action.removeCartItem(this.props.item['id']);
    }

    render() {
        let {name, imagePath, price, quantity} = this.props.item;

        return (
            <div className="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img src={imagePath} />
                    </div>
                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">
                            {name}
                        </div>
                        <div className="cart-item__price">
                            {'$ ' + price + (quantity > 1 ? ' x ' + quantity : '')}
                        </div>
                    </div>
                    <img className="cart-item__trash" src="img/trash-icon.svg" onClick={this.trashOnClick.bind(this)}/>
                </div>
                <div className="cart-item__qty">
                    <QuantityControl item={this.props.item}/>
                </div>
            </div>
        );
    }
}
