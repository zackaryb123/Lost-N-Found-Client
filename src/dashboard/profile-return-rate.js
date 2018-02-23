import React from 'react';
import {connect} from 'react-redux';

import './profile.css';

export class ProfileReturnRate extends React.Component {
    render() {
        return (
            <div className="return-rate">
                <div>
                    <p>[<em>{this.props.returnRate}%</em>]</p>
                </div>
            </div>
        );
    }
}

const mapStatesToProps = state => ({
    returnRate: state.auth.currentUser.returnRate

});

export default connect(mapStatesToProps)(ProfileReturnRate);