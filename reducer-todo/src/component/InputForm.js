import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducer/todoReducer';
import Todo from './Todo'



export const InputForm = () => {    
    const [ state, dispatch ] = useReducer(todoReducer, initialState);
    console.log('state and dispatch',state)
    const [newTodo, setNewTodo] = useState({});

    return (        
        <div>            
            <div>
                <input
                    type="text"
                    name="item"
                    value={ newTodo }
                    onChange={e => setNewTodo(e.target.value) }
                />
                <button onClick={() => {                            
                    dispatch({ type: 'ADD_ITEM', newTodo});
                }}> ADD </button>
            </div>

            <div>
            {state.todo.map(item => (
                 <Todo item={item} key={item.id}/>
             ))}
            </div>
        </div>
        
    )
}