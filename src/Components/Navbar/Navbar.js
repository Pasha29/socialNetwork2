import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import profileImg from './../../Materials/profileImg.png';

const Navbar = () => {
    return (
        <nav className={css.navbar}>
          <div className={css.linksBlock}>
            <p><NavLink to="/profile" className={ (navData) =>  navData.isActive ? css.active : ''  }>Profile</NavLink></p>
            <p><NavLink to="/dialogs" className={ (navData) =>  navData.isActive ? css.active : ''  }>Dialogs</NavLink></p>
            <p><NavLink to="/users" className={ (navData) =>  navData.isActive ? css.active : ''  }>Users</NavLink></p>
            <p><NavLink to="/news" className={ (navData) =>  navData.isActive ? css.active : ''  }>News</NavLink></p>
            <p><NavLink to="/music" className={ (navData) =>  navData.isActive ? css.active : ''  }>Music</NavLink></p>
            <p><NavLink to="/settings" className={ (navData) =>  navData.isActive ? css.active : ''  }>Settings</NavLink></p>
          </div>
          
        <div className={css.friendsBlock}>

          <div className={css.friendBlock}>
            <div className={css.imgBlock}>
              <img src={profileImg} alt="" />
            </div>
            <div className={css.nameBlock}>
              <p>Vasya</p>
            </div>
          </div>

          <div className={css.friendBlock}>
            <div className={css.imgBlock}>
              <img src={profileImg} alt="" />
            </div>
            <div className={css.nameBlock}>
              <p>Petya</p>
            </div>
          </div>

          <div className={css.friendBlock}>
            <div className={css.imgBlock}>
              <img src={profileImg} alt="" />
            </div>
            <div className={css.nameBlock}>
              <p>Anton</p>
            </div>
          </div>

        </div>
        </nav>
    );
}

export default Navbar;