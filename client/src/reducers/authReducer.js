const INITIAL_STATE = { //contains the initial values for state
    isSignedIn: null
}

export default (state = {INITIAL_STATE}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true};
        case 'SIGN_OUT':
            return {...state, isSignedIn: false};
        default:
            return state;
    }
};