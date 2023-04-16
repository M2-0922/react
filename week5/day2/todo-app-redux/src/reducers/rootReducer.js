const initialState = {
    todos:[]
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id != action.payload.id)
            }
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        return {
                            ...todo, completed: !todo.completed
                        }
                    }else{
                        return todo
                    }
                })
            }
        // case "UPDATE_TODO":
        //     return {
        //         todos: state.todos.map(todo => {
        //             if(todo.id === action.payload.id){
        //                 return { 
        //                     id: action.payload.id,
        //                     text: action.payload.text,
        //                     completed: action.payload.completed
        //                 }
        //             }else {
        //                 return todo
        //             }
        //         })
        //     }

        // write a case for edit todo with logic
        case 'EDIT_TODO':
            return {
                todos: state.todos.map(todo => ({
                    ...todo,
                    editable: todo.id === action.payload.id && true
                }))
            }
        case 'SUBMIT_TODO':
            return {
                todos: state.todos.map(todo => ({
                    ...todo,
                    text: todo.id === action.payload.id ? action.payload.text : todo.text,
                    editable: todo.id === action.payload.id && false
                }))
            }
        default:
            return state;
    }
}

export default rootReducer;