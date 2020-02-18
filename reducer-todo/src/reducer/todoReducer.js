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
                        item: action.newTodo,
                        completed: false
                    }
                ]
            }
        case 'REMOVE_ITEMS':          
            return {
                todo: []
            };
        default:
            return state;
    }
}