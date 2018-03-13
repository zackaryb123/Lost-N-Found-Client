import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingHeader extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Lost N Found</h1>
                </header>
                <div id="about">
                    <img alt="about" className="landing-img" src="http://res.cloudinary.com/diygdnbei/image/upload/v1520372255/lostItems_ktrjmh.png"/>
                    <p className="landing-p">Post your lost items per state with detailed location and date found for other users to surf and hopfully find there lost items. Leave your contact info for other users to reach you at.</p>
                </div>
            </div>
        );
    }
}

export default connect()(LandingHeader);
