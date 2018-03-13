import React from 'react';
import {connect} from 'react-redux';
import 'bulma/css/bulma.css';


import './index.css';

import ItemsList from './find-items-list';
//import requiresLogin from '../requires-login';

export class StatesList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            active: false
        };
    }

    toggle() {
        this.setState({active: !this.state.active});
    }
    render() {
        const states = this.props.states;

        const itemsList = Object.keys(this.props.states.items).map((item, index) =>
            <ItemsList
                key={index}
                index={index}
                items={this.props.states.items[item]}
            />
        );
        const itemCount = itemsList.length;
        return (
            <div className={this.state.active ? 'column dropdown is-active': 'column dropdown'}
                 style={this.props.states.items.length < 1 ? {display: 'none'} : {display: 'block'}}
            >
                <div className="dropdown-trigger">
                    <button className="button btn-c1 is-fullwidth" onClick={this.toggle} aria-haspopup="true" aria-controls={states.name}>
                        <span className="btn-title">{states.name}</span>
                        <span className="btn-count">{itemCount}</span>
                    </button>
                </div>
                <div className={this.state.active ? 'is-fullwidth ': 'is-hidden'} id={states.name} role="menu">
                    <div className="dropdown-content bk-c1">
                        <div className="dropdown-item">
                            <div>
                            {itemsList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(StatesList); //requires login