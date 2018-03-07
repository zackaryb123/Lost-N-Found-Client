import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './profile.css';

import Avatar from "./profile-avatar";
import ProfileInfo from "./profile-info";
//import ProfileItemCount from "./profile-item-count";
//import ProfileReturnRate from "./profile-return-rate";
import UpdateModal from './update-modal';
import {fetchUserInfo} from "../actions/users";
//import ProfileItemsListed from "./profile-listed-items";
//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUserInfo(this.props.auth.username));
    }

    render() {
        const user = this.props.user;
        const auth = this.props.auth;
        return (
            <div className="profile-page column">
                <Avatar
                    avatar={auth.avatar}
                    username={user.username}/>
                <ProfileInfo
                    fullName={`${user.firstName} ${user.lastName}`}
                    contactInfo={user.email}/>
                {/*<ProfileItemCount />*/}
                {/*<ProfileReturnRate />*/}
                <UpdateModal />
                <Link to="/dashboard/profile-update">Edit</Link>
                {/*<Route path="/dashboard/profile/update" component={UpdateModal} />*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth.currentUser,
    user: state.user.data
});

export default connect(mapStateToProps)(Profile); //requires login