import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingAbout extends React.Component {
    render() {
        return(
            <div id="about">
                <header>
                    <h3>About</h3>
                </header>
                <img className="landing-img" src="http://res.cloudinary.com/diygdnbei/image/upload/v1520372255/lostItems_ktrjmh.png"/>
                <p>Post your lost items per state with detailed location and description for other users to surf and hopfully find there lost items. Leave your contact info for other users to reach you at.</p>
            </div>
        );
    }
}

export default connect()(LandingAbout);