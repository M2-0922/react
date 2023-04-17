// https://rickandmortyapi.com/api/character

const initialState = {
    characters: [],
}

function ramReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        
        case "FETCH_DATA":
            return {
                ...state,
                characters: action.payload.data
            }
        default:
            return state;
    }
} 

export default ramReducer;