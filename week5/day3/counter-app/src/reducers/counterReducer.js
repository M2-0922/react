const initialState = {
    count: parseInt(localStorage.getItem("count")) || 0
};

function counterReducer(state = initialState, action) {
    const { amount } = action.payload || 0; 
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + amount
            }
            // let newIncrementState = {
            //     ...state,
            //     count: state.count + amount
            // }
            // localStorage.setItem("count", newIncrementState.count);
            // return newIncrementState;
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - amount
            }
            // let newDecrementState = {
            //     ...state,
            //     count: state.count - amount
            // }
            // localStorage.setItem("count", newDecrementState.count);
            // return newDecrementState;
        default:
            return state;
    }
}

export default counterReducer;