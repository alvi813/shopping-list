import React from 'react';
import './App.css';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ShoppingList from "./components/shopping-list";


const App = () => {

    const shoppingListData = [
        {label: 'Pen', id: 1},
        {label: 'Notebook', important: true, id: 2},
        {label: 'Pencil', id: 3}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ShoppingList data = {shoppingListData} />
        </div>
    );
}

export default App;
