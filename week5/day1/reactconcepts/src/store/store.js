import { legacy_createStore as createStore } from 'redux';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialState = {
    todos: [
        // {
        //     id: -1,
        //     text: 'Learn React',
        //     completed: true
        // },
        // {
        //     id: 0,
        //     text: 'Learn Redux',
        //     completed: false
        // },
    ],
    visibilityFilter: VisibilityFilters.SHOW_ALL,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return action.payload;
                    }
                    return todo;
                })
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;