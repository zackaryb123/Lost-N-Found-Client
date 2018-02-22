import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';

export class DashboardNav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/dashboard/profile">
                        <li>Profile</li>
                    </Link>
                    <Link to="/dashboard/items">
                        <li>Find</li>
                    </Link>
                    <Link to="/dashboard/post">
                        <li>Post</li>
                    </Link>
                    <Link to="/dashboard/map">
                        <li>Map</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default connect()(DashboardNav);