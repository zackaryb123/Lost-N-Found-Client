import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import DashboardNav from "./nav";
import Profile from "./profile";
import Find from "./find";
//import Post from "./post";
//import Map from "./map";

//import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="page">
                <Route path="/dashboard" component={DashboardNav} />
                <div className="dashboard">
                    <Route path="/dashboard/profile" component={Profile} />
                    <Route path="/dashboard/find" component={Find} />
                    {/*<Route path="/dashboard/post" component={Post} />*/}
                    {/*<Route path="/dashboard/map" component={Map} />*/}
                </div>
            </div>
        );
    }
}


export default connect()(Dashboard); //requiresLogin()
