import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
                placeholder="Type keywords here"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
