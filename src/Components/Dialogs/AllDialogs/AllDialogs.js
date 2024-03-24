import React from 'react';
import css from './AllDialogs.module.css';
// import Dialog from './Dialog/Dialog';
import { NavLink } from 'react-router-dom';

const AllDialogs = (props) => {

// let dialogElements = props.dialogsData.map( (item) => <Dialog key={item.id} name={item.name} id={item.id} /> )

    return(
        <div className={css.allDialogsBlock}>
            {props.dialogsData.map(item => 
                <div key={item.id} className={css.dialogBlock}>
                    <div className={css.imgDialogBlock}>
                        <img src="https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003_640.png" alt="" />
                    </div>
                    <div className={css.userNameBlock}>
                        <p><NavLink to={`/dialogs/${item.id}`} className={(classData) => classData.isActive ? css.active : ''}>{item.name}</NavLink></p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AllDialogs;