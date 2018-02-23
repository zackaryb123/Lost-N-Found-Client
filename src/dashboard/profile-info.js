import React from 'react';
import {connect} from 'react-redux';

import './profile.css';

export class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <p>{this.props.fullName}</p>
                <p>{this.props.contactInfo}</p>
            </div>
        );
    }s
}

const mapStateToProps = state => {
    const currentUser = state.auth.currentUser;
    return {
        fullName: `${currentUser.firstName} ${currentUser.lastName}`,
        contactInfo: currentUser.email
    };
};

export default connect(mapStateToProps)(ProfileInfo);