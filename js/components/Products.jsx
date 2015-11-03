const React = require("react");
const Data = require("../data.js")
const Product = require("./Product.jsx")

let Products = React.createClass({
    render() {

        let children = Object.keys(Data.products).map(key => {
            return (
                <Product product={Data.products[key]} key={key}/>
            )
        });

        return (
            <div className="products">
                {children}
            </div>

        );
    }
});
module.exports = Products;
