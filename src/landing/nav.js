import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './index.css';

export class LandingNav extends React.Component {
    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return(
            <div>
                <nav id="Landing-Nav">
                    <ul className="nav-ul-scroll">
                        <Link to="/">
                            <li className="nav-left nav-hover">Lost-N-Found</li>
                        </Link>
                        <Link to="/about">
                            <li className="nav-left nav-hover">About</li>
                        </Link>
                        <Link to="/profile">
                            <li className="nav-left nav-hover">Profile</li>
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
                        <Link to="/login">
                            <li className="nav-right nav-hover log-in" id="demo-button">Sign In</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingNav);