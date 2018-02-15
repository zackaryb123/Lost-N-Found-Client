import React from 'react';
import {connect} from 'react-redux';

import './landing.css';

export class LandingMap extends React.Component {
    render() {
        return(
            <section>
                <header>
                    <h3>Map</h3>
                </header>
                <p>[<em>placeholder for screenshot of Mapbox recording interface</em>]</p>
                <p>Map shows the specific location of where the item was lost at, enabling you to determine whether the item is truely your.</p>
            </section>
        );
    }
}

export default connect()(LandingMap);