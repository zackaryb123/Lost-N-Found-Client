import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import './landing-nav.css';

export class LandingNav extends React.Component {
    render() {
        return(
            <nav id="Landing-Nav" role="navigation">
                <ul className="nav-ul-scroll">
                    <a href="#">
                        <li className="nav-left nav-hover">
                            <span className="nav-brand nav-brand-scroll">Lost N Found</span>
                        </li>
                    </a>
                    <a href="#About">
                        <li className="nav-left nav-hover">About</li>
                    </a>
                    <a href="#Post">
                        <li className="nav-left nav-hover">Post</li>
                    </a>
                    <a href="#Map">
                        <li className="nav-left nav-hover">Map</li>
                    </a>
                    <a href="#Sign-Up">
                        <li className="nav-left nav-hover">Sign Up</li>
                    </a>
                    <a href="#log-in">
                        <li className="nav-right nav-hover log-in" id="demo-button">Sign In / Demo Account</li>
                    </a>
                </ul>
            </nav>
        );
    }
}


export default connect()(LandingNav);