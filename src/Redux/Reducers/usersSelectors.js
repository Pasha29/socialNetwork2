// import { createSelector } from "reselect";

export let getUsersData = (state) => {
    return state.usersPage.usersData;
}

// export const getUsersData = (state) => { 
// 	return state.usersPage.usersData.filter( item => true );
// }

// export const getUsersReselect = createSelector(getUsersData, (users) => { 
// 	return users.filter( item => item );
// })

export let getTotalUsersCount = (state) => {
    return state.usersPage.totalItemsCount
}

export let getPageSize = (state) => {
    return state.usersPage.pageSize
}

export let getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export let getToggleLoader = (state) => {
    return state.usersPage.toggleLoader
}

export let getToggleFollowBtn = (state) => {
    return state.usersPage.toggleFollowBtn
}
