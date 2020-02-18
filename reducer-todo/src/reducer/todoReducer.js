import React from 'react';

export const initialState = 
    {
    id: Date.now(),
    item: 'initial item',
    editing: false,
    }


export const todoReducer( state, action ) {
    switch ( action.type ) {
        case 'TOGGLE_EDITING':
            return { ...initialState, editing:!state.editing };
        case 'ADD_ITEM':          
            return {};
        default:
            return state;
    }

}