import { combineReducers } from 'redux'
import { i18nState } from "redux-i18n"
import commonReducer from './commonReducer'

const appReducer = combineReducers({
    i18nState, commonReducer,
})

export const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        const { i18nState, commonReducer } = state
        state = { i18nState, commonReducer: {} }

    }
    return appReducer(state, action)
}