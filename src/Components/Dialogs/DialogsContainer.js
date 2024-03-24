import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../Common/HOC/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);

// let withAuthRedirectComponent = withAuthRedirect(DialogsContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);