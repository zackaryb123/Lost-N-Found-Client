import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

export class UserItemCount extends React.Component {
    render() {
        return (
            <div className="items-count">
                <div>
                    <p>[<em># Items listed</em>]</p>
                </div>
            </div>
        );
    }
}

export default connect()(UserItemCount);