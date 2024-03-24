// import React from 'react';
import Posts from './Posts';
import { addPostAC } from '../../../Redux/Reducers/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postMessages: state.profilePage.postMessages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (inputText) => { dispatch( addPostAC(inputText) ) }
  }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;