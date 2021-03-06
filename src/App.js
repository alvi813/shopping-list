import React, {Component} from 'react';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ShoppingList from "./components/shopping-list";
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from "./components/item-add-form";

import "./App.css"


class App extends Component {

    minId = 10;

    state = {
        shoppingListData: [],
        textToFind: '',
        filter: 'all'   // filter can be: (active, all, done)
    };

    createShoppingListItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.minId++
        }
    }

    deleteItem = (id) => {
        this.setState(({shoppingListData}) => {
            const idDel = shoppingListData.findIndex((el) => el.id === id);

            const before = shoppingListData.slice(0, idDel);
            const after = shoppingListData.slice(idDel + 1);

            const newArray = [...before, ...after];


            return {
                shoppingListData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createShoppingListItem(text);

        this.setState(({shoppingListData}) => {
            const newArr = [...shoppingListData, newItem];

            return {shoppingListData: newArr};
        });
    };

    switchProperty(arr, id, propName) {
        const idDel = arr.findIndex((el) => el.id === id);

        // update object
        const oldItem = arr[idDel];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        // construct new array
        return [
            ...arr.slice(0, idDel),
            newItem,
            ...arr.slice(idDel + 1)
        ];
    }

    onSwitchDone = (id) => {
        this.setState(({shoppingListData})=>{

            return {
                shoppingListData: this.switchProperty(shoppingListData, id, 'done')
            };
        });
    };

    onSwitchImportant = (id) => {
        this.setState(({shoppingListData})=>{

            return {
                shoppingListData: this.switchProperty(shoppingListData, id, 'important')
            };
        });
    };

    onSearchChange = (textToFind) => {
        this.setState({textToFind});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    search (items, textToFind) {
        if (textToFind.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(textToFind.toLowerCase()) > -1   // toLowerCase() - to search regardless of case
        });
    };

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }



    render() {

        const visibleItems = this.filter(this.search(this.state.shoppingListData, this.state.textToFind), this.state.filter);
        const doneCount = this.state.shoppingListData.filter((el)=>el.done).length; // filter creates a new array so we don't change state here

        const toBuyCount = this.state.shoppingListData.length - doneCount;


        return (
            <div className="shopping-list-app">
                <AppHeader toBuy={toBuyCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange = {this.onSearchChange}
                    />
                    <ItemStatusFilter
                        filter={this.state.filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>

                <ShoppingList
                    data={visibleItems}
                    onItemDeleted={this.deleteItem}
                    onSwitchDone={this.onSwitchDone}
                    onSwitchImportant={this.onSwitchImportant}
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}

export default App;
