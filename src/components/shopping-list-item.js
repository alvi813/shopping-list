import React from "react";

const ShoppingListItem = ( { label, important = false } ) => {

    const shoppingListItemStyle = {
        color: important ? "red" : "black"
    };

    return (
        <span
            className="shopping-list-item"
            style={shoppingListItemStyle}
        >
            { label }
        </span>
    );
};

export default ShoppingListItem;