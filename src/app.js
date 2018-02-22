import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import './app.css';

import {refreshAuthToken} from './actions/auth';
import Landing from './landing/index';
import Dashboard from './dashboard/index';

export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <Router>
                    <Route path="/" component={Landing} />
                </Router>
                <Router>
                    <Route path="/dashboard" component={Dashboard} />
                </Router>
            </div>
        );
    }
}

export default connect()(App)
