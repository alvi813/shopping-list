import React, {Component} from "react";

import './search-panel.css';


class SearchPanel extends Component {

    state = {
        textToFind: ''
    };

    onSearchChange = (e) => {
        const textToFind = e.target.value;
        this.setState({textToFind});
        this.props.onSearchChange(textToFind);
    };


    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Type here to search"
                   value={this.state.textToFind}
                   onChange={this.onSearchChange}
            />
        );
    }
}

export default  SearchPanel;