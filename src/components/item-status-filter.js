import React from 'react';

import "./item-class-filter.css"



const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-all">All</button>
            <button type="button"
                    className="btn btn-active">Active</button>
            <button type="button"
                    className="btn btn-outline-secondary">Done</button>
        </div>
    );
};

export default ItemStatusFilter;