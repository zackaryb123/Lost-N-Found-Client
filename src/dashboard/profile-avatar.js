import React from 'react';
import {connect} from 'react-redux';

//import requiresLogin from './requires-login';

import './profile.css';

export class Avatar extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProfileData());
    // }

    render() {
        return (
            <div className="user-avatar">
                <div>
                    <image src={this.props.avatar}> </image>
                </div>
                <h1>{this.props.username}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.username,
    avatar: state.auth.avatar
});

export default connect(mapStateToProps)(Avatar); // requiresLogin