import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingHeader extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Lost N Found</h1>
                    <h2>return and rescue</h2>
                </header>
            </div>
        );
    }
}

export default connect()(LandingHeader);
