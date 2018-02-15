import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import './landing-page.css';

import LandingNav from './landing-nav';
import LandingInfo from './landing-info';
import RegisterForm from './register-form';

export class LandingPage extends React.Component {
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

export default connect()(LandingPage);