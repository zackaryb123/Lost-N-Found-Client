import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './index.css';
import {clearAuth} from "../actions/auth";
import {clearAuthToken} from "../local-storage";
//import {refreshPage} from "../actions/utils";

export class DashboardNav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />
        }
        return (
            <nav>
                <ul>
                    <Link
                        to="/dashboard">
                        <li>Profile</li>
                    </Link>
                    <Link
                        to="/dashboard/find">
                        <li>Find</li>
                    </Link>
                    <Link
                        to="/dashboard/post">
                        <li>Post</li>
                    </Link>
                    {/*<Link*/}
                        {/*to="/dashboard/map">*/}
                        {/*<li>Map</li>*/}
                    {/*</Link>*/}
                    <Link
                        to="/"
                        onClick={() => this.logOut()}>
                        <li>LogOut</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashboardNav);