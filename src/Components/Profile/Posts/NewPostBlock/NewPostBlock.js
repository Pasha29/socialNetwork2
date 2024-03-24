import React from 'react';
import css from './NewPostBlock.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../Common/Validators/Validators';
import { Input } from '../../../Common/FormsControl/FormsControl';

let maxLength10 = maxLength(10);

let PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={css.inputWrapper}>
      <div>
        <Field component={Input} name='postInput' placeholder='your news...' validate={[required, maxLength10]} />
      </div>
    <button>Send</button>
    </form>
  )
}

let ReduxPostForm = reduxForm({
  form: 'postForm'
})(PostForm);

const NewPostBlock = (props) => {
  
  let addPost = (formData) => {
    props.addPost(formData.postInput);
  }

    return (
        <div className={css.newPostBlock}>
            <p>My posts</p>
            <div className={css.formWrapper}>
              <ReduxPostForm onSubmit={addPost}/>
            </div>
          </div>
    );
}

export default NewPostBlock;