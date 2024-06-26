import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <div>
          <ProfileInfo setMainDataTC={props.setMainDataTC} changeProfilePhotoTC={props.changeProfilePhotoTC} isOwner={props.isOwner}
           profile={props.profile} status={props.status} updateUserStatusTC={props.updateUserStatusTC} />
          <PostsContainer />
        </div>
      );
}

export default Profile;