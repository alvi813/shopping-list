import React, {Component} from 'react';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ShoppingList from "./components/shopping-list";
import ItemStatusFilter from './components/item-status-filter';

import "./App.css"



class App extends Component {

    state = {
        shoppingListData: [
            {label: 'Pen', id: 1},
            {label: 'Notebook', important: true, id: 2},
            {label: 'Pencil', id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({shoppingListData}) => {
            const idDel = shoppingListData.findIndex((el) => el.id === id);

            const before = shoppingListData.slice(0,idDel);
            const after = shoppingListData.slice(idDel + 1);

            const newArray = [...before, ...after];


            return {
                shoppingListData: newArray
            }
        })
    };

    render() {

        return (
            <div className="shopping-list-app">
                <AppHeader toBuy={1} done={1}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <ShoppingList
                    data={this.state.shoppingListData}
                    onDeleted={this.deleteItem()}/>
            </div>
        );
    }
}

export default App;
