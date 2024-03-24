import { getAuthDataTC } from "./authReducer";

const INITIAL_STATE = 'INITIAL_STATE';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIAL_STATE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export let inializeStateAC = () => ({type: INITIAL_STATE})

export let initializeStateTC = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthDataTC());
        promise.then(response => {
            dispatch(inializeStateAC());
        })
    }
}


export default appReducer;