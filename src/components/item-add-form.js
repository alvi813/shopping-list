import React, {Component} from 'react';

import './item-add-form.css';



class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
            value: ''
        });


    };

    onSubmit = (e) => {
        e.preventDefault();    // the page doesn't reload and the entered data doesn't disappear
        this.props.onItemAdded(this.state.label);
    }


    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>

                <input
                    type = "text"
                    className = "form-control"
                    onChange = {this.onLabelChange}
                    placeholder = "Enter your needs here"
                />

                <button
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        )
    }
}

export default ItemAddForm;
