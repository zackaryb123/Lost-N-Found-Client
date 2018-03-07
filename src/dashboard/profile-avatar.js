import React from 'react';
import {connect} from 'react-redux';
//import requiresLogin from './requires-login';

import './profile.css';

export class Avatar extends React.Component {
    render() {
        return (
            <div className="user-avatar">
                <div>
                   <img src={this.props.avatar} alt="Avatar" />
                </div>
                <h1>@{this.props.username}</h1>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     const currentUser = state.auth.currentUser;
//     return {
//         avatar: currentUser.avatar,
//         username: currentUser.username
//     };
// };

export default connect()(Avatar);