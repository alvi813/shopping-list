import React, {Component} from "react";

import "./shopping-list-item.css"


class ShoppingListItem extends Component {

    render() {
        const {
            label,
            onItemDeleted,
            onSwitchDone,
            onSwitchImportant,
            done,
            important
        } = this.props;


        let classNames = "shopping-list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important";
        }


        return (
            <span className={classNames}>

            <span
                className="shopping-list-item-label"
                onClick={onSwitchDone}
            >
            {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onSwitchImportant}
            >
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onItemDeleted}
            >
                <i className="fa fa-trash-o"/>
            </button>

            </span>
        );
    }
}

export default ShoppingListItem;