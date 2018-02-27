import React from 'react';
import {connect} from 'react-redux';

import './index.css';

import StatesList from "./find-states-list";
import {fetchStatesData} from "../actions/states-data";
//import requiresLogin from '../requires-login';

export class Find extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStatesData());
    }

    render() {
        const statesList = Object.keys(this.props.states).map((state, index) =>
            <StatesList key={index} states={this.props.states[state]}/>
        );
        return (
            <div className="find-page">
                <h1>Lost Item List</h1>
                {statesList}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    states: state.states.data
});

export default connect(mapStateToProps)(Find); //requires login