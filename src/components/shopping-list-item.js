import React, {Component} from "react";

import "./shopping-list-item.css"


class ShoppingListItem extends Component {

    render() {
        const { label, important = false } = this.props;

        const shoppingListItemStyle = {
            color: important ? "red" : "black",
            fontWeight: important ? 'bold' : 'normal'
        };


        return (
            <span className="shopping-list-item">

            <span
                className="shopping-list-item-label"
                style={shoppingListItemStyle}>
            {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>

            </span>
        );
    }
}

export default ShoppingListItem;