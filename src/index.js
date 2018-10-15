import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA-cUxzrNZ1Oftyr3MJJXNO1GXoefUM1ms';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>

    );
}

ReactDOM.render(<App /> , document.querySelector('.container'));