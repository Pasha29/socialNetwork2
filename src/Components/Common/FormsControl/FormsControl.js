// import { Field } from 'redux-form';
import css from './FormControl.module.css';

export let Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;
    return (
        <>
            {meta.form === 'login' ?
            <input {...input} {...props} className={`${css.loginInput} ${hasError ? css.error : ''}`}/> :
            meta.form === 'profileMainData' ?
            <input {...input} {...props} className={`${css.profileMainData} ${hasError ? css.error : ''}`}/> :
            <input {...input} {...props} className={`${css.commonInput} ${hasError ? css.error : ''}`}/>
            
            }
            {hasError ? <span className={css.error}>{meta.error}</span> : ''}
            
        </>
    );
}

// export let createField = (name, placeholder, component, validators, props = {}, textField) => {
//     return (
//         <div>
//             <p>{textField}</p>
//             <Field name={name} placeholder={placeholder} component={component} validate={validators} {...props}/>
//         </div>
//     );
// }

