import React from 'react';
import {connect} from 'react-redux';

import './landing-info.css';

export class LandingInfo extends React.Component {
    render() {
        return(
            <div>
                <header role="banner">
                    <h1>Lost N Found</h1>
                    <h2>return and rescue</h2>
                </header>
                <section>
                    <header>
                        <h3>About</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of Post page recording interface</em>]</p>
                    <p>Post your lost items per state with detailed location and description for other users to surf and hopfully find there lost items. Leave your contact info for other users to reach you at.</p>
                </section>
                <section>
                    <header>
                        <h3>Profile</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of Profile recording interface</em>]</p>
                    <p>Interactive charts and personalized statistics show others how reliable those are at returning items.</p>
                </section>
                <section>
                    <header>
                        <h3>Post</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of Post recording interface</em>]</p>
                    <p>Post a lost item for other users to search through and find there items. Include lost item location, date found and description to help others narrow down the search.</p>
                </section>
                <section>
                    <header>
                        <h3>Map</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of Mapbox recording interface</em>]</p>
                    <p>Map shows the specific location of where the item was lost at, enabling you to determine whether the item is truely your.</p>
                </section>
            </div>
        );
    }
}