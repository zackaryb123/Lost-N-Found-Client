import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingPost extends React.Component {
    render() {
        return(
            <section>
                <header>
                    <h3>Post</h3>
                </header>
                <p>[<em>placeholder for screenshot of Post recording interface</em>]</p>
                <p>Post a lost item for other users to search through and find there items. Include lost item location, date found and description to help others narrow down the search.</p>
            </section>
        );
    }
}

export default connect()(LandingPost);