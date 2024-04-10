import React, { useState } from 'react';
import css from './ProfileInfo.module.css';
import backgroundImg from './../../../Materials/contentImg.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import profileImg from './../../../Materials/profileImg.png';
import ProfileMainInfo from './ProfileMainInfo/ProfileMainInfo';
import ProfileMainInfoReduxForm from './ProfileMainInfo/ProfileMainInfoForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if(!props.profile) {
    return <Preloader />
  }

  let selectNewPhoto = (e) => {
    if(e.target.files.length > 0){ 
      props.changeProfilePhotoTC(e.target.files[0]);
    }
  }

  let onSubmit = (formData) => {
    props.setMainDataTC(formData).then(() => {
      setEditMode(false);
    }).catch(() => {});
    }

  return (
        <>
        <div className={css.profileBackground}>
            <img src={backgroundImg} alt=""/>
          </div>

          <div className={css.profile}>
            <div className={css.profileImg}>
              <img src={ props.profile.photos.large || profileImg } alt=""/>
              {props.isOwner && <label htmlFor={'fileInput'} className={css.customInput}> New photo...
                <input id={"fileInput"} type={'file'} onChange={selectNewPhoto}/>
                </label>}
              <ProfileStatus status={props.status} updateUserStatusTC={props.updateUserStatusTC} />
            </div>

            <div className={css.profileData}>
                {editMode ? <ProfileMainInfoReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
                          : <ProfileMainInfo setEditMode={() => {setEditMode(true)}} isOwner={props.isOwner} profile={props.profile}/>}
              </div>
           </div>
        </>
    );
}



export default ProfileInfo;