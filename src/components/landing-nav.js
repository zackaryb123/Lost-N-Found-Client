import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './landing-nav.css';

export class LandingNav extends React.Component {
    render() {
        return(
            <nav id="Landing-Nav">
                <ul className="nav-ul-scroll">
                    <Link to="/">
                        <li className="nav-left nav-hover">
                            <span className="nav-brand nav-brand-scroll">Lost N Found</span>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-left nav-hover">About</li>
                    </Link>
                    <Link to="/post">
                        <li className="nav-left nav-hover">Post</li>
                    </Link>
                    <Link to="/map">
                        <li className="nav-left nav-hover">Map</li>
                    </Link>
                    <Link to="/join">
                        <li className="nav-left nav-hover">Sign Up</li>
                    </Link>
                    <Link to="/log-in">
                        <li className="nav-right nav-hover log-in" id="demo-button">Sign In / Demo Account</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}


export default connect()(LandingNav);