import React from 'react';
import {connect} from 'react-redux';

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
                    <button className="button btn-c2 is-fullwidth" onClick={this.toggle} aria-haspopup="true" aria-controls={items.name}>
                        <span className="no-pad column">{items.name}</span>
                        <span className="no-pad column">{items.location}</span>
                        <span className="no-pad column">{items.dateFound}</span>
                    </button>
                </div>
                <div className={this.state.active ? 'is-fullwidth bk-color': 'is-hidden'} id={items.name} role="menu">
                    <div className="dropdown-content bk-c2">
                        <div className="dropdown-item column">
                            <img style={{width: '100px'}} alt="username" src={items.avatar} />
                            <h3>@{items.user}</h3>
                        </div>
                        <div className="dropdown-item column">
                            <h4>Location Found:</h4>
                            {items.location}
                        </div>
                        <div className="dropdown-item column">
                            <h4>Date Found:</h4>
                            {items.dateFound}
                        </div>
                        <div className="dropdown-item column">
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