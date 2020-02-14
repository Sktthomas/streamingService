import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    CREATE_STREAM
} from '../actions/types'
import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload} //takes the old state and creates a new state object that also includes the streams from the action payload, using their id as a key and payload as value
        case CREATE_STREAM:
            return{...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}; //creating a new object containing all the records in our state and adding them in. Then we are calling the mapkey function and adding the newly gathered streams from the payload and concatting them to the state
        default:
            return state
    }
}