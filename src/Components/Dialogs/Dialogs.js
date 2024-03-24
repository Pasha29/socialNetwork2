import React from 'react';
import css from './Dialogs.module.css';
import AllDialogsContainer from './AllDialogs/AllDialogsContainer';
import AllMessagesContainer from './AllMessages/AllMessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={css.dialogsBlock}>
            <AllDialogsContainer />
            <AllMessagesContainer />
        </div>
    );
}

export default Dialogs;