import {COMMENT_CREATE} from "./types";
import {errorOn} from "./actions";

const badWords = ['козёл', 'осёл']

export function spamFilter(store) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                console.log('create comment')
                const hasBadWords = badWords.some(res => action.data.text.includes(res))
                if (hasBadWords) {
                    return store.dispatch(errorOn('Уважайте людей'))
                }
            }
            return next(action)
        }
    }
}