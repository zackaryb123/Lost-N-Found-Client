import React from 'react';
import {connect} from 'react-redux';

import './profile.css';

export class ProfileInfo extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProfileData());
    // }

    render() {
        return (
            <div className="user-info">
                <p>{this.props.fullName}</p>
                <p>{this.props.contactInfo}</p>
            </div>
        );
    }s
}

const mapStateToProps = state => ({
    fullName: `${state.auth.firstName} ${state.auth.lastName}`,
    contactInfo: state.auth.contactInfo
});

export default connect(mapStateToProps)(ProfileInfo);