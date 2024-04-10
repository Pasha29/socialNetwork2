import { stopSubmit } from "redux-form";
import { profileAPI } from "../../Api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_MAIN_DATA = 'SET_MAIN_DATA';

let initialState = {
    postMessages: [
        { id: 1, textPost: 'Hi' },
        { id: 2, textPost: 'Hello' }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                postMessages: [...state.postMessages, { id: 3, textPost: action.inputText }]
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        default: 
            return state; 
    }
} 


export let addPostAC = (inputText) => ({ type: ADD_POST, inputText: inputText });

export let setProfileDataAC = (profile) => ({type: SET_PROFILE_DATA, profile: profile})

export let setUserStatusAC = (status) => ({type: SET_USER_STATUS, status: status})

export let setPhotoAC = (photos) => ({type: SET_PHOTO, photos: photos})

export let setMainDataAC = (data) => ({type: SET_MAIN_DATA, data: data})


export let getProfileTC = (userId) => {
    return async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setProfileDataAC(response));
    }
}

export let getUserStatusTC = (userId) => {
    return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatusAC(response));
    }
}

export let updateUserStatusTC = (status) => {
    return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.resultCode === 0){
            dispatch(setUserStatusAC(status));
        }
    }
}

export let changeProfilePhotoTC = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.updatePhoto(file);
        if(response.resultCode === 0){
            dispatch(setPhotoAC(response.data.photos));
        }
    }
}

export let setMainDataTC = (data) => {
    return async (dispatch, getState) => {
        let response = await profileAPI.updateMainData(data);
        let userId = getState().auth.userId;
        if(response.resultCode === 0){
                dispatch(getProfileTC(userId));
        }
        else {
            dispatch( stopSubmit('profileMainData', {_error: response.messages[0]} ));
            return Promise.reject(`1 ${response.messages[0]}`);
        }
    }
}

export default profileReducer;
