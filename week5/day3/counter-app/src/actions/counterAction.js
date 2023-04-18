// actions
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// action creators
export function increaseCount(amount) {
    return {
        type: INCREMENT,
        payload: { amount: amount }
    }
}

export function decreaseCount(amount) {
    return {
        type: DECREMENT,
        payload: { amount: amount }
    }
}