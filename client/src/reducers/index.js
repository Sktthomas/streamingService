import {combineReducers} from 'redux'
import authReducer from './authReducer'
import { reducer as formReducer} from 'redux-form'; //you can import then rename stuff to avoid naming things the same all the time
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})