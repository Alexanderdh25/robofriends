import React from 'react';

const Searchbox = (props) => {
    return (
        <input 
            type="search" 
            placeholder='search robots' 
            onChange={props.searchChange}
        />
    )
}

export default Searchbox