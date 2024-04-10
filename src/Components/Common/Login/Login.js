import React from 'react';
import css from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormsControl/FormsControl';
import { required } from '../Validators/Validators';
import { connect } from 'react-redux';
import { loginTC } from '../../../Redux/Reducers/authReducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    console.log(props.error);
    return (
        <form onSubmit={props.handleSubmit}>
            {/* {createField('email', 'Email', Input, [required], null, 'Login111111:')} */}
            <div className={css.loginInput}>
                <p>Login:</p>
                <Field name={'email'} placeholder={'Email'} component={Input} validate={[required]} />
            </div>
            <div className={css.passwordInput}>
                <p>Password:</p>
                <Field name={'password'} placeholder={'Password'} type='password' component={Input} validate={[required]}/>
            </div>
            <div className={css.rememberMeInput}>
                <p>Remember me:</p>
                <Field name={'rememberMe'} type={'checkbox'} component={Input}/>
            </div>
            {props.error ? 
            <div className={css.commonError}>
                {props.error}
            </div> : ''}
             {props.captcha && 
            <div className={css.captchaBlock}>
                <img src={props.captcha} alt="" />
                <Field name={'captcha'} placeholder={'Captcha'} component={Input}/>
            </div>} 
            
            <button>Enter</button>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    let onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Navigate to='/profile' />
    }
    return (
        <div className={css.authWrapper}>
            <div className={css.formWrapper}>
                <ReduxLoginForm captcha={props.captcha} onSubmit={onSubmit}/> 
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export default connect(mapStateToProps, { loginTC })(Login);