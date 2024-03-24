import React from 'react';
import css from './ProfileInfo.module.css';
import backgroundImg from './../../../Materials/contentImg.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
        <>
        <div className={css.profileBackground}>
            <img src={backgroundImg} alt=""/>
          </div>

          <div className={css.profile}>
            <div className={css.profileImg}>
              <img src={props.profile.photos.large} alt=""/>
            </div>

            <div className={css.profileData}>
                <h2>{props.profile.fullName}</h2>

                <ProfileStatus status={props.status} updateUserStatusTC={props.updateUserStatusTC} />
                <p>{`Looking for a job?: ${props.profile.lookingForAJob ? 'Yes' : 'No'}`}</p>
                <p>{`Description: ${props.profile.lookingForAJobDescription}`}</p>
                <p>{`About me: ${props.profile.aboutMe}`}</p>
                <p>{`Github: ${props.profile.contacts.github}`}</p>
                <p>{`Instagram: ${props.profile.contacts.instagram}`}</p>
              </div>
           </div>
        </>
    );
}

export default ProfileInfo;