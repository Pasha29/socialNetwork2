import React from 'react';
import css from './NewMessageBlock.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControl/FormsControl';
import { maxLength, required } from '../../../Common/Validators/Validators';

let maxLength20 = maxLength(20);

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.inputWrapper}>
            <div>
                <Field component={Input} validate={[required, maxLength20]} name='messageInput' placeholder='your message...' />
            </div>
            <button>Send</button>
        </form>
    );
}

let NewMessageFormRedux = reduxForm({
    form: 'messageForm'
})(NewMessageForm);

const NewMessageBlock = (props) => {

    let addMessage = (formData) => {
        props.addMessage(formData.messageInput);
    }

    return (
        <div className={css.newMessageBlock}>
            <div className={css.formWrapper}>
            <NewMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
}

export default NewMessageBlock;