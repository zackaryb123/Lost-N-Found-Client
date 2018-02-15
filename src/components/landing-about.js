import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingAbout extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h3>About</h3>
                </header>
                <p>[<em>placeholder for screen shot of Post page recording interface</em>]</p>
                <p>Post your lost items per state with detailed location and description for other users to surf and hopfully find there lost items. Leave your contact info for other users to reach you at.</p>
            </div>
        );
    }
}

export default connect()(LandingAbout);