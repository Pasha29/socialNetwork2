import React from 'react';
import css from './User.module.css';
import undefinedImg from './../../../Materials/profileImg.png';
import { NavLink } from 'react-router-dom';

const User = ({item, ...props}) => {
    return (
        <div className={css.userBlock}>

            <div className={css.followBlock}>
                <div className={css.imgBlock}>
                    <NavLink to={`/profile/${item.id}`}><img src={item.photos.small != null ? item.photos.small : undefinedImg} alt="" /></NavLink>
                </div>
                <div className={css.buttonBlock}>

                    {item.followed ?
                        <button disabled={props.toggleFollowBtn.some(id => id === item.id)}
                            onClick={() => { props.unfollowTC(item.id); }}>Unfollow</button>
                        :
                        <button disabled={props.toggleFollowBtn.some(id => id === item.id)}
                            onClick={() => { props.followTC(item.id); }}>Follow</button>}
                </div>
            </div>

            <div className={css.userDataBlock}>

                <div className={css.mainData}>
                    <div className={css.nameBlock}>
                        <p>{item.name}</p>
                        {/* <p>{"props.item.lastName"}</p> */}
                    </div>
                    <p>{"props.item.description"}</p>
                </div>

                <div className={css.addressBlock}>
                    <p>{"props.item.address.country"}</p>
                    <p>{"props.item.address.city"}</p>
                </div>

            </div>

        </div>
    );
}

export default User;