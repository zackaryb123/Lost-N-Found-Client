import React from 'react';
import {connect} from 'react-redux';

import './profile.css';

import Avatar from "./profile-avatar";
import ProfileInfo from "./profile-info";
import ProfileItemCount from "./profile-item-count";
import ProfileReturnRate from "./profile-return-rate";
//import ProfileItemsListed from "./profile-listed-items";
//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch();
    // }

    render() {
        return (
            <div className="profile-page">
                <Avatar />
                <ProfileInfo />
                <ProfileItemCount />
                <ProfileReturnRate />
                {/*<ProfileItemsListed />*/}
            </div>
        );
    }
}

export default connect()(Profile); //requires login