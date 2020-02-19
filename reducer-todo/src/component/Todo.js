import React from 'react';


const Todo = (props) => {
    return (
        <div
        style={props.item.completed ? {textDecoration: 'line-through'} : {color:'red'}}
        onClick={()=> {props.toggle(props.item.id)}}
        >
            <h1>{props.item.item} {props.item.completed}</h1>
        </div>
    )
}

export default Todo;