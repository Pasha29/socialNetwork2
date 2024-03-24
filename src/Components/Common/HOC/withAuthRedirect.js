import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if(!props.isAuth) return <Navigate to='/login' />
        
        return (<Component {...props} />);
    }
    
    return connect(mapStateToProps)(RedirectComponent);
}