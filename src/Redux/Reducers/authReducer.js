import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../Api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_DATA: 
            return {
                ...state,
                ...action.data
            }
        case SET_CAPTCHA: 
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state;
    }
}

export let setAuthDataAC = (userId, login, email, isAuth, captcha) => ({type: SET_AUTH_DATA, data: {userId, login, email, isAuth, captcha}})

export let setCaptchaAC = (captcha) => ({type: SET_CAPTCHA, captcha: captcha})


export let getAuthDataTC = () => {
    return async (dispatch) => {
    let response = await authAPI.getAuthData();
        if(response.resultCode === 0){
            let {id, login, email} = response.data;
            dispatch(setAuthDataAC(id, login, email, true));
        }
    }
}

export let loginTC = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
        if(response.resultCode === 0) {
            dispatch(getAuthDataTC());
        }
        else {
            if(response.resultCode === 10){
                dispatch(getCaptcha());
            }
            let err = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispatch( stopSubmit('login', {_error: err} ))
        }
    }
}

export let logoutTC = () => {
    return async (dispatch) => {
    let response = await authAPI.logout();
        if(response.resultCode === 0) {
            dispatch(setAuthDataAC(null, null, null, false));
        }
    }
}

export let getCaptcha = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha();
        console.log(response.url);
        dispatch(setCaptchaAC(response.url));
    }
}

export default authReducer;