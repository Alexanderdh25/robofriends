import React from 'react';

const Searchbox = (props) => {
    console.log(props);
    return (
        <input 
            type="search" 
            placeholder='search robots' 
            onChange={props.searchChange}
        />
    )
}

export default Searchbox