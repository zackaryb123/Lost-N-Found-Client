import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

export class UserItemsListed extends React.Component {
    render() {
        return (
            <div className="items-listed">
                <div>
                    <p>[<em>List of items posted</em>]</p>
                </div>
            </div>
        );
    }
}

export default connect()(UserItemsListed);