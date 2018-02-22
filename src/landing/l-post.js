import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingPost extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h3>Post</h3>
                </header>
                <p>[<em>placeholder for screenshot of Post recording interface</em>]</p>
                <p>Post a lost item for other users to search through and find there items. Include lost item location, date found and description to help others narrow down the search.</p>
            </div>
        );
    }
}

export default connect()(LandingPost);