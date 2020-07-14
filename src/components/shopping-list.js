import React from "react";
import ShoppingListItem from "./shopping-list-item";

const ShoppingList = ( {data} ) => {

    const elements = data.map((item) => {
        return (
            <li>
                <ShoppingListItem
                    label={item.label}
                    important={item.important}
                />
            </li>
        );
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default ShoppingList;