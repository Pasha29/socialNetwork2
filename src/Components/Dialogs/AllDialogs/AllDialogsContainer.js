// import React from 'react';
import AllDialogs from './AllDialogs';
import { connect } from 'react-redux';

// const AllDialogsContainer = (props) => {

// let store = props.store.getState();

//     return(
//         <AllDialogs dialogsData={store.dialogsPage.dialogsData} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

let AllDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AllDialogs);

export default AllDialogsContainer;