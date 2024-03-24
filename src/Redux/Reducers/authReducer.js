import { stopSubmit } from "redux-form";
import { headerAPI } from "../../Api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_DATA: 
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export let setAuthDataAC = (userId, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {userId, login, email, isAuth}})


export let getAuthDataTC = () => {
    return async (dispatch) => {
    let response = await headerAPI.getAuthData();
        if(response.resultCode === 0){
            let {id, login, email} = response.data;
            dispatch(setAuthDataAC(id, login, email, true));
        }
    }
}

export let loginTC = (email, password, rememberMe) => {
    return async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe);
        if(response.resultCode === 0) {
            dispatch(getAuthDataTC());
        }
        else {
            let err = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispatch( stopSubmit('login', {_error: err} ))
        }
    }
}

export let logoutTC = () => {
    return async (dispatch) => {
    let response = await headerAPI.logout();
        if(response.resultCode === 0) {
            dispatch(setAuthDataAC(null, null, null, false));
        }
    }
}

export default authReducer;