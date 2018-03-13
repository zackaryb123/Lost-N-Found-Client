import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './index.css';

export class LandingNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    dropDown = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return(
            <div>
                <nav id="Landing-Nav">
                    <ul className="nav-ul-scroll">
                        <Link style={this.state.active? {display: 'inline-block'}: {display: 'none'}} to="/">
                            <li className="nav-left nav-hover">Lost-N-Found</li>
                        </Link>
                        <Link style={this.state.active? {display: 'inline-block'}: {display: 'none'}} to="/profile">
                            <li className="nav-left nav-hover">Profile</li>
                        </Link>
                        <Link style={this.state.active? {display: 'inline-block'}: {display: 'none'}} to="/post">
                            <li className="nav-left nav-hover">Post</li>
                        </Link>
                        {/*<Link to="/map">*/}
                            {/*<li className="nav-left nav-hover">Map</li>*/}
                        {/*</Link>*/}
                        <Link style={this.state.active? {display: 'inline-block'}: {display: 'none'}} to="/join">
                            <li className="nav-left nav-hover">Sign Up</li>
                        </Link>
                        <Link style={this.state.active? {display: 'inline-block'}: {display: 'none'}} to="/login">
                            <li className="nav-right nav-hover log-in" id="demo-button">Sign In</li>
                        </Link>
                        <button onClick={this.dropDown} style={{color: 'black'}} className="nav-btn-drop">| |</button>
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