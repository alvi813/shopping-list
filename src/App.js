import React from 'react';
import './App.css';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ShoppingList from "./components/shopping-list";


const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ShoppingList />
        </div>
    );
}

export default App;
