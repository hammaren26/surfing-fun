import {INPUT_TEXT} from "./types";

const initalState = {
    text: ''
}

export const inputReducer = (state = initalState, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}