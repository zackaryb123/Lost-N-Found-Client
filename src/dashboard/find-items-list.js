import React from 'react';
import {connect} from 'react-redux';
import { Collapse, Button, CardBody, Card, ListGroupItem } from 'reactstrap';

import './index.css';
//import {fetchStatesData} from "../actions/states-data";
//import requiresLogin from '../requires-login';

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    // componentDidMount() {
    //     this.props.dispatch(fetchStatesData());
    // }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const items = this.props.items;

        return (
            <ListGroupItem style={{listStyle: 'none'}}>
                <div className="states">
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{items.name}</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <div>
                                    <h4>Location Found:</h4>
                                    {items.location}
                                </div>
                                <div>
                                    <h4>Date Found:</h4>
                                    {items.dateFound}
                                </div>
                                <div>
                                    <h4>Contact Info:</h4>
                                    {items.contactInfo}
                                </div>
                            </CardBody>
                        </Card>
                </Collapse>
            </div>
        </ListGroupItem>
        );
    }
}

// const mapStateToProps = state => ({
//
// });

export default connect()(ItemsList); //requires login