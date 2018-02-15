import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import './landing/landing.css';

import {LandingNav} from './landing/landing-nav';
import {LandingHeader} from './landing/landing-header';
import {LandingAbout} from './landing/landing-about';
import {LandingProfile} from './landing/landing-profile';
import {LandingPost} from './landing/landing-post';
import {LandingMap} from './landing/landing-map';
import {RegisterForm} from './forms/register-form';
import {LoginForm} from './forms/login-form';

export class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <LandingNav />
                <LandingHeader />
                <Route path="/about" component={LandingAbout} />
                <Route path="/profile" component={LandingProfile} />
                <Route path="/post" component={LandingPost} />
                <Route path="/map" component={LandingMap} />
                <Route path="/join" component={RegisterForm} />
                <Route path="/login" component={LoginForm}/>
            </div>
        );
    }
}

export default connect()(LandingPage);