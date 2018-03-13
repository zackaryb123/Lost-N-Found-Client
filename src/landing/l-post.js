import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingPost extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Post</h1>
                </header>
                <img alt="post" className="landing-img" src="https://res.cloudinary.com/diygdnbei/image/upload/v1520967398/Post_haotst.png"/>
                <p className="landing-p">Post a lost item for other users to search through and find there items. Include lost item location, date found and description to help others narrow down the search.</p>
            </div>
        );
    }
}

export default connect()(LandingPost);