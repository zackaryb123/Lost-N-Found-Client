import React from 'react';
import {connect} from 'react-redux';

import './index.css';
import {removePost} from "../actions/states-data";
//import requiresLogin from '../requires-login';

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {
            active: false,
            modal: false,
            item: {},
            index: null
        };
    }

    componentDidMount(){
        this.setState({
            item: this.props.items,
            index: this.props.index
        });
    }

    remove() {
        console.log(this.state.index);
        this.props.dispatch(removePost(this.state.item, this.state.index));
    }

    toggle() {
        this.setState({active: !this.state.active});
    }

    openModal() {
        this.setState({modal: !this.state.modal});
    }

    render() {
        const items = this.props.items;

        return (
            <div>
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
                        <a className="delete" onClick={this.openModal}>{/**/}</a>
                    </div>
                </div>
            </div>
            <div className={this.state.modal? 'modal is-active': 'modal'}>
                <div className="modal-background">{/**/}</div>
                <div className="modal-content">
                    <p>Are you sure you want to delete post?</p>
                    <button onClick={this.remove}>Yes</button>
                    <button onClick={this.remove}>No</button>
                </div>
                <button className="modal-close is-large" onClick={this.openModal} aria-label="close">{/**/}</button>
            </div>
        </div>

        );
    }
}

const mapStateToProps = state => ({
    states: state.states.data
});

export default connect(mapStateToProps)(ItemsList); //requires login