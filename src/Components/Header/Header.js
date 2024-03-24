import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImg from './../../Materials/headerImg.png';

const Header = (props) => {
    return (
        <header className={css.header}>
          <img src={headerImg} alt=""/>

          <div className={css.authData}>
            {props.isAuth ? 
            <div>
              <p>{`Login: ${props.login}`}</p>
              <button onClick={props.logoutTC}>Logout</button>
            </div> 
            : <NavLink to="/login"><button>Login</button></NavLink>}
          </div>
      </header>
    );

}

export default Header;