// actions
const FETCH_DATA = "FETCH_DATA";

// action creators
export function fetchCharacterData(data){
    return {
        type: FETCH_DATA,
        payload: { data: data }
    }
}