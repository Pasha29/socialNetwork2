import React from 'react';
import css from './ProfileStatus.module.css';

class ProfileStatusClassComponent extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatusTC(this.state.status);
    }

    changeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState){ 
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={css.statusWrapper}>
                {this.state.editMode ? 
                <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.changeStatus} value={ this.state.status } /> :
                <p onClick={this.activateEditMode}>{this.props.status || 'No status'}</p>}
            </div>
        );
    }
}

export default ProfileStatusClassComponent;