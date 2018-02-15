import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import './landing.css';

import LandingNav from './landing-nav';
import LandingHeader from './landing-header';
import LandingAbout from './landing-about';
import LandingProfile from './landing-profile';
import LandingPost from './landing-post';
import LandingMap from './landing-map';
import RegisterForm from './register-form';

export class LandingPage extends React.Component {
    render() {
        return (
            <div>
            <LandingNav />
            <main role="main">
                <Route exacy path="/" component={LandingHeader} />
                <Route exact path="/about" component={LandingAbout} />
                <Route exact path="/profile" component={LandingProfile} />
                <Route exact path="/post" component={LandingPost} />
                <Route exact path="/map" component={LandingMap} />
                <Route exact path="/join" component={RegisterForm} />
            </main>
            </div>
        );
    }
}

export default connect()(LandingPage);