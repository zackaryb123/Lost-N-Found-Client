import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

export class UserReturnRate extends React.Component {
    render() {
        return (
            <div className="return-rate">
                <div>
                    <p>[<em>Graph of # items returned of Total listed</em>]</p>
                </div>
            </div>
        );
    }
}

export default connect()(UserReturnRate);