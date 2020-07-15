import React, {Component} from "react";

import "./shopping-list-item.css"


class ShoppingListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        };
    }

    onLabelClick = () => {
        this.setState({
            done: true
        });
    };

    onButtonExclamationClick = () => {
        this.setState({
            important: true
        });
    };

    render() {
        const { label } = this.props;

        const { done } = this.state;
        const { important } = this.state;

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
                onClick = {this.onLabelClick}
            >
            {label}
            </span>

            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onButtonExclamationClick}
            >
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o"/>
            </button>

            </span>
        );
    }
}

export default ShoppingListItem;