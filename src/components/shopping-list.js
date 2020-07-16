import React, {Component} from "react";
import ShoppingListItem from "./shopping-list-item";

import "./shopping-list.css";


class ShoppingList extends Component {
    render() {
        const {data, onItemDeleted} = this.props;
        const elements = data.map((item) => {
            return (
                <li key = {item.id} className="list-group-item">
                    <ShoppingListItem
                        label={item.label}
                        important={item.important}
                        onItemDeleted = {() => onItemDeleted(item.id)}
                    />
                </li>
            );
        });

        return (
            <ul className="list-group shopping-list">
                {elements}
            </ul>
        );
    }
}

export default ShoppingList;