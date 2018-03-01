import React from 'react';
import {connect} from 'react-redux';
import 'bulma/css/bulma.css';

import './index.css';
//import requiresLogin from '../requires-login';

export class ItemsList extends React.Component {
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
        //need to send state and index to aria-contols and dropdown-menue id for unique name
        const items = this.props.items;

        return (

            <div className={this.state.active ? 'column dropdown is-active': 'column dropdown'}>
                <div className="dropdown-trigger">
                    <button className="button is-fullwidth" onClick={this.toggle} aria-haspopup="true" aria-controls={items.name}>
                        <span>{items.name}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className={this.state.active ? 'is-fullwidth': 'is-hidden'} id={items.name} role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <h4>Location Found:</h4>
                            {items.location}
                        </div>
                        <div className="dropdown-item">
                            <h4>Date Found:</h4>
                            {items.dateFound}
                        </div>
                        <div className="dropdown-item">
                            <h4>Contact Info:</h4>
                            {items.contactInfo}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ItemsList); //requires login