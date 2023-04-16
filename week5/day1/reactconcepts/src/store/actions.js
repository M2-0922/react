// write action creators for store.js

import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './store';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    }
}
