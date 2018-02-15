import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from './requires-login';
import DashboardNav from "./Dashboard/dashboard-nav";
import Avatar from "./Dashboard/avatar";
import UserInfo from "./Dashboard/user-info";
import UserItemCount from "./Dashboard/user-item-count";
import UserReturnRate from "./Dashboard/user-return-rate";
import UserItemsListed from "./Dashboard/user-listed-items";

export class Dashboard extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <DashboardNav />
                <div className="dashboard">
                    <Avatar />
                    <UserInfo />
                    <UserItemCount />
                    <UserReturnRate />
                    <UserItemsListed />
                </div>
            </div>
        );
    }
}


export default requiresLogin()(connect()(Dashboard));
