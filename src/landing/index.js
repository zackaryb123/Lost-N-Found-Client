import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import './index.css';

import LandingNav from './nav';
import LandingHeader from './l-header';
import LandingAbout from './l-about';
import LandingProfile from './l-profile';
import LandingPost from './l-post';
import LandingMap from './l-map';
import RegisterForm from '../forms/register-form';
import LoginForm from '../forms/login-form';

export function Landing() {
        return (
            <div className="page">
                <LandingNav />
                <div className="landing">
                    <Route exact path="/" render={() =>
                        <LandingHeader/>} />
                    <Route path="/about" component={LandingAbout} />
                    <Route path="/profile" component={LandingProfile} />
                    <Route path="/post" component={LandingPost} />
                    <Route path="/map" component={LandingMap} />
                    <Route path="/join" component={RegisterForm} />
                    <Route path="/login" component={LoginForm}/>
                </div>
            </div>
        );

}

export default connect()(Landing);