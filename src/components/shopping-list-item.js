import React from "react";

import "./shopping-list-item.css"



const ShoppingListItem = ( { label, important = false } ) => {

    const shoppingListItemStyle = {
        color: important ? "red" : "black",
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="shopping-list-item">

            <span
                className="todo-list-item-label"
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
};

export default ShoppingListItem;