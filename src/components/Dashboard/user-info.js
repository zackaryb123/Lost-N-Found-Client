import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

export class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <div>
                    <p>Full Name</p>
                    <p>City, State</p>
                </div>
                <div>
                    <ul>
                        <li>1. Contact info</li>
                        <li>2. Contact info</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect()(UserInfo);