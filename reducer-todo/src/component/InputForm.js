import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducer/todoReducer';
import Todo from './Todo'

// const init = () => {
//     return {todo:[]}
// }

export const InputForm = () => {    
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    // console.log('state and dispatch',state)
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = () => {
        dispatch({ type: 'ADD_ITEM', payload: newTodo });
        setNewTodo('');
    }

    const handleToggle = (id) => {
        // const toggledCompleted = state.todo.map(item => item.id === paramId ? {...item, completed: !item.completed} : item );
        dispatch({type: 'TOGGLE', payload: id } );
        console.log(id);
    }

    return (        
        <div>            
            <div>
                <input
                    type="text"
                    name="item"
                    value={ newTodo }
                    onChange={e => setNewTodo(e.target.value) }
                />
                <button onClick={handleSubmit}> ADD </button>
            </div>
            <div>
            {state.todo.map(item => (
                 <Todo item={item} key={item.id} toggle={handleToggle}/>
             ))}
            </div>
            <button onClick={()=>{dispatch({type: 'REMOVE_ITEMS'})}}>remove</button>
        </div>
    )
}