import React, {Component} from "react";
import ShoppingListItem from "./shopping-list-item";

import "./shopping-list.css";


class ShoppingList extends Component {
    render() {
        const {data, onDeleted} = this.props;
        const elements = data.map((item) => {
            return (
                <li key = {item.id} className="list-group-item">
                    <ShoppingListItem
                        label={item.label}
                        important={item.important}
                        onDeleted = {() => onDeleted(item.id)}
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