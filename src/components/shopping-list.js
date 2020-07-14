import React from "react";
import ShoppingListItem from "./shopping-list-item";

const ShoppingList = ( {data} ) => {

    const elements = data.map((item) => {
        return (
            <li key = {item.id} className="list-group-item">
                <ShoppingListItem
                    label={item.label}
                    important={item.important}
                />
            </li>
        );
    });

    return (
        <ul className="list-group shopping-list">
            {elements}
        </ul>
    );
};

export default ShoppingList;