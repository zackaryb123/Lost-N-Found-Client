import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './profile.css';

//import UpdateModal from './update-modal';
import {fetchUserInfo} from "../actions/users";
//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUserInfo(this.props.auth.username));
    }

    render() {
        const user = this.props.user;
        const auth = this.props.auth;
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={auth.avatar} alt="Placeholder"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{`${user.firstName} ${user.lastName}`}</p>
                            <p className="subtitle is-6">@{user.username}</p>
                        </div>
                    </div>

                    <div className="content">
                        <a type='email'>{user.email}</a>
                        <Link style={{float: 'right'}} to="/dashboard/profile-update">Edit</Link>
                        {/*<Route path="/dashboard/profile/update" component={UpdateModal} />*/}
                    </div>
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({
    auth: state.auth.currentUser,
    user: state.user.data
});

export default connect(mapStateToProps)(Profile); //requires login