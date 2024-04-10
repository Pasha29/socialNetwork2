import React from 'react';
import css from './ProfileMainInfo.module.css';

const ProfileMainInfo = (props) => {
    return (
        <div className={css.mainInfo}>

            <h2>{props.profile.fullName}</h2>

            <p>{`Looking for a job?: ${props.profile.lookingForAJob ? 'Yes' : 'No'}`}</p>
            
            {props.profile.lookingForAJob && 
            <p>{`Description: ${props.profile.lookingForAJobDescription}`}</p>}
            
            <p>{`About me: ${props.profile.aboutMe}`}</p>

            {Object.keys(props.profile.contacts).map(item => {
                return <Contacts key={item} contactKey={item} contactData={props.profile.contacts[item]} />
            })}
            {props.isOwner && <div><button onClick={props.setEditMode}>Edit data</button></div> }
        </div>
    );
}

let Contacts = (props) => {
    return <p>{props.contactKey}: {props.contactData}</p>
  }

export default ProfileMainInfo;