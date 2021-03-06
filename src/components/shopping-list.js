import React, {Component} from "react";
import ShoppingListItem from "./shopping-list-item";

import "./shopping-list.css";


class ShoppingList extends Component {

    render() {
        const {data, onItemDeleted, onSwitchDone, onSwitchImportant} = this.props;
        const elements = data.map((item) => {
            return (
                <li key = {item.id} className="list-group-item">
                    <ShoppingListItem
                        label={item.label}
                        done={item.done}
                        important={item.important}
                        onItemDeleted = {() => onItemDeleted(item.id)}
                        onSwitchDone = {() => onSwitchDone(item.id)}
                        onSwitchImportant = {() => onSwitchImportant(item.id)}
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