import {DECREMENT, INCREMENT} from "./types";

const initalState = {
    likes: 0
}

export const likesReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        default:
            return state
    }
}