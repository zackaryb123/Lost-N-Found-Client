import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import './index.css';

import LandingNav from './nav';
import LandingHeader from './l-header';
import LandingAbout from './l-about';
import LandingProfile from './l-profile';
import LandingPost from './l-post';
import LandingMap from './l-map';
import RegisterForm from '../forms/register-form';
import LoginForm from '../forms/login-form';
import Dashboard from '../dashboard/index';

export class Landing extends React.Component {

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard"/>;
        }

        return (
            <div className="page">
                <Route exact path="/" component={LandingNav} />
                <div className="landing">
                    <Route path="/landing" component={LandingHeader} />
                    <Route path="/landing/about" component={LandingAbout} />
                    <Route path="/landing/profile" component={LandingProfile} />
                    <Route path="/landing/post" component={LandingPost} />
                    <Route path="/landing/map" component={LandingMap} />
                    <Route path="/landing/join" component={RegisterForm} />
                    <Route path="/landing/login" component={LoginForm}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);