import React from 'react';
import {connect} from 'react-redux';

import './index.css';

import StatesList from "./find-states-list";
//import requiresLogin from '../requires-login';

export class Find extends React.Component {
    render() {
        return (
            <div className="find-page">
                <h1>Lost Item List</h1>
                <StatesList />
            </div>
        );
    }
}

export default connect()(Find); //requires login