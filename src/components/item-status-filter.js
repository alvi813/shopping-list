import React, {Component} from 'react';

import "./item-class-filter.css"


class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ]

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = isActive ? 'btn-outline-success btn-active' : 'btn-outline-secondary btn-not-active'

            return (
                <button type="button"
                        className={`btn ${buttonClass}`}
                        key={name}
                        onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;