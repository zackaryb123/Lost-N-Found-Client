import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingProfile extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h3>Profile</h3>
                </header>
                <img alt="profile" className="landing-img" src="http://res.cloudinary.com/diygdnbei/image/upload/v1520372257/profilePage_hlpbcg.png" />
                <p>View your profile and edit your email.</p>
            </div>
        );
    }
}

export default connect()(LandingProfile);