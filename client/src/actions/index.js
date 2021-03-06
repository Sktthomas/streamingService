import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM}from './types';
import streams from '../apis/streams';
import createBrowserHistory from '../history'

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return{
        type: SIGN_OUT
    };
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchSingleStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({type: EDIT_STREAM, payload: response.data
    })
    createBrowserHistory.push('/')
}

export const deleteStream = (id) => async dispatch => {

    //no response from a delete request (actually does, but it's just an empty object {} )
    await streams.delete(`/streams/${id}`);

    dispatch({type: DELETE_STREAM, payload: id})
    createBrowserHistory.push('/')
}



export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId} ); //When a new stream is posted, all the values of the form is sent, along with the userId

        dispatch({type: CREATE_STREAM, payload: response.data})
        createBrowserHistory.push('/') //push is how we navigate the user around.
    }
}