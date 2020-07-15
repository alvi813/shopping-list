import React, {Component} from "react";

import './app-header.css';


class AppHeader extends Component {
    render() {
        const {toBuy, done} = this.props;

        return (
            <div className="app-header d-flex">
                <h1>My shopping list</h1>
                <h2>{toBuy} more to buy, {done} done</h2>
            </div>
        );
    }
}

export default AppHeader;