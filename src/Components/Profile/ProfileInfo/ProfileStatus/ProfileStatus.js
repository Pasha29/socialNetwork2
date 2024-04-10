import React, { useState, useEffect } from 'react';
import css from './ProfileStatus.module.css';

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
    
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }

//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateUserStatusTC(this.state.status);
//     }

//     changeStatus = (e) => {
//         this.setState({
//             status: e.target.value
//         })
//     }

//     componentDidUpdate(prevProps, prevState){ 
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {
//         return (
//             <div className={css.statusWrapper}>
//                 {this.state.editMode ? 
//                 <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.changeStatus} value={ this.state.status } /> :
//                 <p onClick={this.activateEditMode}>{this.props.status || 'No status'}</p>}
//             </div>
//         );
//     }
// }

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatusTC(status);
    }

    let changeStatus = (e) => {
        setStatus(e.target.value);
    } 

    return (
        <div className={css.statusWrapper}>
            <p>Status: </p>
            {editMode ?
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={changeStatus} value={status} /> :
                <p onClick={activateEditMode}>{status || 'No status'}</p>}
        </div>
    );
}

export default ProfileStatus;