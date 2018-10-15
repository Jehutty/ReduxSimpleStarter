import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const config = require('../config/api_keys');
const API_KEY = config.Youtube_API_KEY;

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>

    );
}

ReactDOM.render(<App /> , document.querySelector('.container'));