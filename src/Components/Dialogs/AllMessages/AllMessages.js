import React from 'react';
import css from './AllMessages.module.css';
// import Message from './Message/Message';
import NewMessageBlock from './NewMessageBlock/NewMessageBlock';

const AllMessages = (props) => {

    return(
        <div className={css.allMessagesBlock}>
            
            { props.messagesData.map( (item) => 
            <div key={item.id} className={css.nessageBlock}>
                <div className={css.textBlock}>
                    <p>{item.textMessage}</p>
                </div>
            </div> )}

            <NewMessageBlock addMessage={props.addMessage} />
        </div>
    );
}

export default AllMessages;