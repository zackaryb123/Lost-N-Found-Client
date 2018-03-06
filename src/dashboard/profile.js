import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './profile.css';

import Avatar from "./profile-avatar";
import ProfileInfo from "./profile-info";
//import ProfileItemCount from "./profile-item-count";
//import ProfileReturnRate from "./profile-return-rate";
import UpdateModal from './update-modal';
//import ProfileItemsListed from "./profile-listed-items";
//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    render() {
        return (
            <div className="profile-page column">
                <Avatar />
                <ProfileInfo />
                {/*<ProfileItemCount />*/}
                {/*<ProfileReturnRate />*/}
                <UpdateModal />
                <Link to="/dashboard/profile-update">Edit</Link>
                {/*<Route path="/dashboard/profile/update" component={UpdateModal} />*/}
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//    closed: this.state.closed === true
// });

export default connect()(Profile); //requires login