import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingHeader extends React.Component {
    render() {
        return(
            <header role="banner">
                <h1>Lost N Found</h1>
                <h2>return and rescue</h2>
            </header>
        );
    }
}

export default connect()(LandingHeader);
