import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {  logoutTC } from './../../Redux/Reducers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.getAuthDataTC();
    }

    render(){
        return (
            <Header { ...this.props } />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logoutTC })(HeaderContainer);