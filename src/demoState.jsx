import React, { useState } from 'react';
import PropTypes from 'prop-types';

Count.propTypes = {
    //nothing
};

function Count(props) {
    //bản thân Count có thể tự thay đổi state của chính nó, khác vs props - thứ mà ta chỉ có thể read-only mà k thể tự thay đổi
    //khai bao mac dinh bien count = 0
    const [count, setCount] = useState(0) //Returns a stateful value, and a function to update it. And 0 is an initial value of "count"
    //nay la ung useState React Hook
    const handleClick = () => {
        setCount(num => num + 1);
    }
    return (
        <div>
            <p>Current number is: {count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}

export default Count;
/**
 * 
 */