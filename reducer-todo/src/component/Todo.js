import React from 'react';


const Todo = (props) => {
    return (
        <div>
            <h1>{props.item.item}</h1>
        </div>
    )
}

export default Todo;