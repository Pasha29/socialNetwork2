import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsersTC, followTC, unfollowTC } from './../../Redux/Reducers/usersReducer';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../Common/HOC/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getPageSize, getToggleFollowBtn, getToggleLoader, getTotalUsersCount, getUsersData } from '../../Redux/Reducers/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    getNewUsers = (index) => {
        this.props.getUsersTC(index, this.props.pageSize);
    }
     
    render(){
        return (
        <>
        {this.props.toggleLoader ? <Preloader /> : null}
        <Users totalItemsCount={this.props.totalItemsCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         usersData={this.props.usersData}
                         toggleLoader={this.props.toggleLoader}
                         toggleFollowBtn={this.props.toggleFollowBtn}
                         getNewUsers={this.getNewUsers}
                         followTC={this.props.followTC}
                         unfollowTC={this.props.unfollowTC}/>
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        totalItemsCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        toggleLoader: getToggleLoader(state),
        toggleFollowBtn: getToggleFollowBtn(state),
    }
}


// let mapStateToProps = (state) => {
//     return {
//         usersData: state.usersPage.usersData,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         pageSize: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         toggleLoader: state.usersPage.toggleLoader,
//         toggleFollowBtn: state.usersPage.toggleFollowBtn,
//     }
// }


// let mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => { dispatch(followUserAC(userId)) },
//         unfollowUser: (userId) => { dispatch(unfollowUserAC(userId)) },
//         setUsers: (users) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (pageIndex) => { dispatch(setCurrentPageAC(pageIndex)) },
//         setTotalUsersCount: (count) => { dispatch(setTotalUsersCountAC(count)) },
//         setToggleLoader: (loaderState) => { dispatch(toggleLoaderAC(loaderState)) }
//     }
// }

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUsersTC, followTC, unfollowTC }),
)(UsersContainer);

// let withAuthRedirectComponent = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//     getUsersTC,
//     followTC,
//     unfollowTC
// })(withAuthRedirectComponent);  
