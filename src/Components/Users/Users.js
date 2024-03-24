import React from 'react';
import User from './User/User';
import css from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';

const Users = (props) => {
    return (
        <div className={css.usersWrapper}>

            <Paginator totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize} 
                       currentPage={props.currentPage}
                       getNewUsers={props.getNewUsers}
                       portionSize={10}/>

            {props.usersData.map(item => ( <User key={item.id}
                                                 item={item}
                                                 toggleFollowBtn={props.toggleFollowBtn}
                                                 followTC={props.followTC}
                                                 unfollowTC={props.unfollowTC} /> ))
            }
        </div>
    );
}

export default Users;