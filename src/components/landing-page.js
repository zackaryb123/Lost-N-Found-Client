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
                <Route path="/" component={LandingHeader} />
                <Route path="/about" component={LandingAbout} />
                <Route path="/profile" component={LandingProfile} />
                <Route path="/post" component={LandingPost} />
                <Route path="/map" component={LandingMap} />
                <Route path="/join" component={RegisterForm} />
            </main>
            </div>
        );
    }
}

export default connect()(LandingPage);