import React from 'react';
import preloader from './../../../Materials/preloader.gif';
import css from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={css.preloaderWrapper}>
            <img src={preloader} alt=""/>
        </div>
    );
}

export default Preloader;