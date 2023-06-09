import React from 'react';

const Scroll = (props) => {
    return (
        <div class="scrollbar" style={{overflowY: 'scroll', border: '1px solid', height: '520px', padding: '10px 0px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;