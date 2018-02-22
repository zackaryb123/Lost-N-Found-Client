import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import {LandingHeader} from "./l-header";

export class LandingNav extends React.Component {
    render() {
        return(
            <div>
                <nav id="Landing-Nav">
                    <ul className="nav-ul-scroll">
                        <Link to="/landing/about">
                            <li className="nav-left nav-hover">About</li>
                        </Link>
                        <Link to="/landing/profile">
                            <li className="nav-left nav-hover">Profile</li>
                        </Link>
                        <Link to="/landing/post">
                            <li className="nav-left nav-hover">Post</li>
                        </Link>
                        <Link to="/landing/map">
                            <li className="nav-left nav-hover">Map</li>
                        </Link>
                        <Link to="/landing/join">
                            <li className="nav-left nav-hover">Sign Up</li>
                        </Link>
                        <Link to="/landing/login">
                            <li className="nav-right nav-hover log-in" id="demo-button">Sign In / Demo Account</li>
                        </Link>
                    </ul>
                </nav>
                {/*<LandingHeader />*/}
            </div>
        );
    }
}


export default connect()(LandingNav);