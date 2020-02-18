import React from 'react';
export const initialState = {
    todo:[
        {
        id: 111111111,
        item: 'initial item',
        completed: false,
        },
        {
        id: 111146541,
        item: 'second item',
        completed: false,
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            {console.log('initial state/action',action)}
            return {
                todo: [
                    ...state.todo,
                    {
                        id: Date.now(),
                        item: action.payload,
                        completed: false
                    }
                ]
            }
        case 'TOGGLE':          
            return {
            todo: state.todo.map(item => (
                    item.id === action.payload ? { ...item, completed: !item.completed } : item                
            ))            
        };
        case 'REMOVE_ITEMS':          
            return {
                todo: state.todo.filter(item => (
                    !item.completed                    
                ))
            };
        case 'REMOVE_ALL':          
            return {
                todo: []
            };
        
        default:
            return state;
    }
}