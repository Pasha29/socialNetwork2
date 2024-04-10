import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControl/FormsControl';
import css from './ProfileMainInfo.module.css';

const ProfileMainInfoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <p>{`Full Name:`}</p>
                <Field name={'fullName'} placeholder={'Full Name'} component={Input} />
            </div>

            <div>
                <p>{`Looking for a job?:`}</p>
                <Field name={'lookingForAJob'} placeholder={'Looking for a job?'} component={Input} type='checkbox'/>
            </div>

            <div>
                <p>{`Looking for a job description:`}</p>
                <Field name={'lookingForAJobDescription'} placeholder={'Description'} component={Input} />
            </div>

            <div>
                <p>{`About me:`}</p>
                <Field name={'aboutMe'} placeholder={'About me'} component={Input} />
            </div>

            {Object.keys(props.profile.contacts).map(item => {
                 return (
                 <div key={item} >
                    <p>{`${item}:`}</p>
                    <Field name={`contacts.${item}`} placeholder={item} component={Input} />
                </div>);
             })}
             {props.error ? 
            <div className={css.commonError}>
                {props.error}
            </div> : ''}
             
            <div><button>Save</button></div>
        </form>
    );
}

const ProfileMainInfoReduxForm = reduxForm({
    form: 'profileMainData' 
})(ProfileMainInfoForm);

export default ProfileMainInfoReduxForm;