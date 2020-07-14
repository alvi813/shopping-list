import React from "react";
import ShoppingListItem from "./shopping-list-item";

const ShoppingList = () => {
    return (
        <ul>
            <li> <ShoppingListItem label = 'Pen' /> </li>
            <li> <ShoppingListItem
                label = 'Notebook'
                important
                 />
            </li>
        </ul>
    );
};

export default ShoppingList;