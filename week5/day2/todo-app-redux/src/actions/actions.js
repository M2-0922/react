// actions
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

<<<<<<< HEAD
// write a action for edit todo
const EDIT_TODO = "EDIT_TODO";
const SUBMIT_TODO = "SUBMIT_TODO";
=======
>>>>>>> refs/heads/master

// action creator
export function addTodo(data) {
    return { type: ADD_TODO, payload: data };
}

export function deleteTodo(id) {
    return { type: DELETE_TODO, payload: { id } };
}

export function toggleTodo(id) {
    return { type: TOGGLE_TODO, payload: { id } };
}

export function updateTodo(data) {
<<<<<<< HEAD
    return { type: UPDATE_TODO, payload: data };
}

// write a action creator for edit todo
export function editTodo(id) {
    return {
    type: EDIT_TODO,
    payload: { id },
    };
}

export function submitTodo(id, text) {
    return {
    type: SUBMIT_TODO,
    payload: { id, text },
    };
}
=======
    return { type: UPDATE_TODO, payload: data }
}
>>>>>>> refs/heads/master
