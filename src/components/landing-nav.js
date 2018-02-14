import React from 'react';
import {connect} from 'react-redux';

import './landing-nav.css';

export class LandingNav extends React.Component {
    render() {
        return(
            <nav id="Landing-Nav" role="navigation">
                <ul className"nav-ul-scroll">
                    <Link to="#">
                        <li className="nav-left nav-hover">
                            <span className="nav-brand nav-brand-scroll">Lost N Found</span>
                        </li>
                    </Link>
                    <Link to="#About">
                        <li className="nav-left nav-hover">About</li>
                    </Link>
                    <Link to="#Post">
                        <li className="nav-left nav-hover">Post</li>
                    </Link>
                    <Link to="#Map">
                        <li className="nav-left nav-hover">Map</li>
                    </Link>
                    <Link to="#Sign-Up">
                        <li className="nav-left nav-hover">Sign Up</li>
                    </Link>
                    <Link to="#log-in">
                        <li className="nav-right nav-hover log-in" id="demo-button">Sign In / Demo Account</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}


export default connect()(LnadingNav);