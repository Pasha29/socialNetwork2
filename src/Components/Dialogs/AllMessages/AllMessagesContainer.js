// import React from 'react';
import AllMessages from './AllMessages';
import { addMessageAC } from '../../../Redux/Reducers/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageInput) => { dispatch(addMessageAC(messageInput)) }
    }
}

let AllMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AllMessages);

export default AllMessagesContainer;