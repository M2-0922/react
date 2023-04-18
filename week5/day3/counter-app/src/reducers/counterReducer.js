const initialState = {
    count: parseInt(localStorage.getItem("count")) || 0,
};

function counterReducer(state = initialState, action) {
    const { amount } = action.payload || 0; 
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + amount
            }
        case 'DECREMENT':
            return {
                count: state.count - amount
            }
        default:
            return state;
    }
}

export default counterReducer;