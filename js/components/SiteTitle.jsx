import React from "react";
import ProductStore from "../stores/ProductStore.jsx";
import connect from "./connect.jsx";

class SiteTitle extends React.Component {
    heartOnClick(e) {
        ProductStore.toggleShowOnlyLike();
    }
    render() {
        let heart = this.props.showOnlyLike ? "img/heart-liked.svg" : "img/heart.svg";
        return (
            <div className="title">
                <h2>Buy Me Shoes</h2>
                <img className="title__heart" src={heart} onClick={this.heartOnClick.bind(this)}/>
            </div>
        );
    }
};

class ConnectedSiteTitle extends SiteTitle {}

ConnectedSiteTitle = connect(ProductStore, "showOnlyLike")(ConnectedSiteTitle);

module.exports = ConnectedSiteTitle;
