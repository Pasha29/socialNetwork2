import { usersAPI } from "../../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'PAGE_CLICK';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const TOGGLE_FOLLOW_BTN = 'TOGGLE_FOLLOW_BTN';

// let updateObjectInState = (users, actionData, nameProp, newObjProps) => {
//     return users.map(item => {
//         if (item[nameProp] === actionData) {
//             return { ...item, ...newObjProps }
//         }
//         return item;
//     })
// }
    

let initialState = {
    usersData: [
        // {id: 1, userImgUrl: 'https://cdn-icons-png.flaticon.com/512/20/20079.png', firstName: 'Vasya', lastName: 'Virastyk', followed: true, description: 'Lorem1 lorem lorem', address: { country: 'Ukraine', city: 'Kyiv' }},
        // {id: 2, userImgUrl: 'https://cdn-icons-png.flaticon.com/512/20/20079.png', firstName: 'Petya', lastName: 'Lorak', followed: false, description: 'Lorem2 lorem lorem', address: { country: 'Ukraine', city: 'Lviv' }},
        // {id: 3, userImgUrl: 'https://cdn-icons-png.flaticon.com/512/20/20079.png', firstName: 'Kolya', lastName: 'Yuschenko', followed: true, description: 'Lorem3 lorem lorem', address: { country: 'Ukraine', city: 'Kharkiv' }},
        // {id: 4, userImgUrl: 'https://cdn-icons-png.flaticon.com/512/20/20079.png', firstName: 'Sasha', lastName: 'Yanukovych', followed: true, description: 'Lorem4 lorem lorem', address: { country: 'Ukraine', city: 'Lutsk' }},
    ],
    totalItemsCount: 0,
    pageSize: 100,
    currentPage: 1,
    toggleLoader: false,
    toggleFollowBtn: [],
    fake: 0
}

let usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                //usersData: updateObjectInState(state.usersData, action.userId, 'id', { followed: true })
                usersData: state.usersData.map( item => {
                    if(item.id === action.userId){
                        return { ...item, followed: true }
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //usersData: updateObjectInState(state.usersData, action.userId, 'id', { followed: false })
                usersData: state.usersData.map( item => {
                    if(item.id === action.userId) {
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
        case SET_USERS: 
            return {
                ...state,
                usersData: [ ...action.users ]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageIndex
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.count
            }
            case TOGGLE_LOADER:
                return {
                    ...state,
                    toggleLoader: action.loaderState
                }
            case TOGGLE_FOLLOW_BTN:
                return {
                    ...state,
                     toggleFollowBtn: action.followBtnState 
                     ? [...state.toggleFollowBtn, action.userId] 
                     : state.toggleFollowBtn.filter(item => item !== action.userId)
                }
        default:
            return state;
    }
}

export const followUserAC = (userId) => ({ type: FOLLOW, userId: userId })

export const unfollowUserAC = (userId) => ({ type: UNFOLLOW, userId: userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users: users })

export const setCurrentPageAC = (pageIndex) => ({ type: SET_CURRENT_PAGE, pageIndex: pageIndex })

export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})

export const toggleLoaderAC = (loaderState) => ({type: TOGGLE_LOADER, loaderState: loaderState})

export const toggleFollowBtnAC = (userId, followBtnState) => ({type: TOGGLE_FOLLOW_BTN, userId: userId, followBtnState: followBtnState})


export const getUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleLoaderAC(true));
        dispatch(setCurrentPageAC(currentPage));
        let response = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleLoaderAC(false));
            dispatch(setTotalUsersCountAC(response.totalCount));
            dispatch(setUsersAC(response.items));
    }
}

const followUnfollowCommon = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowBtnAC(userId, true)); 
        let response = await apiMethod(userId);
            if(response.resultCode === 0) {
                dispatch(actionCreator(userId));
                dispatch(toggleFollowBtnAC(userId, false));
            }
}

export const followTC = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);

        followUnfollowCommon(dispatch, userId, apiMethod, followUserAC);

        // dispatch(toggleFollowBtnAC(userId, true)); 
        // let response = usersAPI.follow(userId);
        //     if(response.resultCode === 0) {
        //         dispatch(actionCreator);
        //         dispatch(toggleFollowBtnAC(userId, false));
        //     }
    }
}

export const unfollowTC = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);

        followUnfollowCommon(dispatch, userId, apiMethod, unfollowUserAC);

        // dispatch(toggleFollowBtnAC(userId, true)); 
        // let response = await usersAPI.unfollow(userId);
        //    if(response.resultCode === 0) {
        //        dispatch(unfollowUserAC(userId));
        //        dispatch(toggleFollowBtnAC(userId, false));
        //    }
    }
}


export default usersReducer;