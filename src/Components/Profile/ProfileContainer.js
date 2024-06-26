import React from 'react';
import Profile from './Profile.js';
import { connect } from 'react-redux';
import { getProfileTC, getUserStatusTC, updateUserStatusTC,
         changeProfilePhotoTC, setMainDataTC } from './../../Redux/Reducers/profileReducer.js';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from './../Common/HOC/withAuthRedirect.js';
import { compose } from 'redux';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();

      // useEffect(() => {
      //   debugger
      //   if (!props.isAuth) {
      //     navigate("/login");
      //   }
      // }, [props.isAuth, navigate]);

      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  refreshUsersData(){ 
    let userId = this.props.router.params.userId;
    if(!userId){
      userId = this.props.authorizedUserId;
    }
    this.props.getProfileTC(userId);
    this.props.getUserStatusTC(userId);
  }
  
  componentDidMount() {
    this.refreshUsersData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshUsersData();
    }
  }
  
  render() {
      return <Profile setMainDataTC={this.props.setMainDataTC} changeProfilePhotoTC={this.props.changeProfilePhotoTC} isOwner={!this.props.router.params.userId} 
              profile={this.props.profile} status={this.props.status} updateUserStatusTC={this.props.updateUserStatusTC} /> 
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getProfileTC, getUserStatusTC, updateUserStatusTC, changeProfilePhotoTC, setMainDataTC }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);

// let withAuthRedirectComponent = withAuthRedirect(ProfileContainer);


// export default connect(mapStateToProps, { getProfileTC })(withRouter(withAuthRedirectComponent));