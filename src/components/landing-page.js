import React from 'react';
import {connect} from 'react-redux';

import './landing-page.css';

import LandingNav from './landing-nav';
import LandingInfo from './landing-info';
import RegisterForm from './register-form';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
            <LandingNav />
            <main role="main">
                <LandingInfo />
                <RegisterForm />
                <Route path="/about" component={About} />
            </main>
            </div>
        );
    }
}