import { profileAPI } from "../../Api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_USER_STATUS = 'SET_USER_STATUS';
// const DELETE_POST = 'DELETE_POST';

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
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         postMessages: state.postMessages.filter(item => item.id !== action.userId)
        //     }
        default: 
            return state; 
    }
} 


export let addPostAC = (inputText) => ({ type: ADD_POST, inputText: inputText });

export let setProfileDataAC = (profile) => ({type: SET_PROFILE_DATA, profile: profile})

export let setUserStatusAC = (status) => ({type: SET_USER_STATUS, status: status})

// export let deleteAC = (userId) => ({type: DELETE_POST, userId: userId})


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

export default profileReducer;
