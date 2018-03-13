import React from 'react';
import {connect} from 'react-redux';

import './index.css';

export class LandingMap extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Map</h1>
                </header>
                <p>[<em>placeholder for screenshot of Mapbox recording interface</em>]</p>
                <p>Map shows the specific location of where the item was lost at, enabling you to determine whether the item is truely your.</p>
            </div>
        );
    }
}

export default connect()(LandingMap);