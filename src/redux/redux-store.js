import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {likesReducer} from "./likesReducer";
import {inputReducer} from "./inputReducer";
import {commentReducer} from "./commentsReducer";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {spamFilter} from "./middleware";


export const reduxStore = combineReducers({
    likes: likesReducer,
    input: inputReducer,
    comments: commentReducer,
    app: appReducer
})


export const store = createStore(reduxStore, compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

window.__store__ = store