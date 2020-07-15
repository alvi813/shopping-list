import React from 'react';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ShoppingList from "./components/shopping-list";
import ItemStatusFilter from './components/item-status-filter';

import "./App.css"



const App = () => {

    const shoppingListData = [
        {label: 'Pen', id: 1},
        {label: 'Notebook', important: true, id: 2},
        {label: 'Pencil', id: 3}
    ];

    return (
        <div className="shopping-list-app">
            <AppHeader toBuy={1} done={1}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <ShoppingList data={shoppingListData}/>
        </div>
    );
}

export default App;
