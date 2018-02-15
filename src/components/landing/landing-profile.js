import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingProfile extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h3>Profile</h3>
                </header>
                <p>[<em>placeholder for screenshot of Profile recording interface</em>]</p>
                <p>Interactive charts and personalized statistics show others how reliable those are at returning items.</p>
            </div>
        );
    }
}

export default connect()(LandingProfile);