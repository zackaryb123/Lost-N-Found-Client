import React from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import {connect} from 'react-redux';

import './index.css';
import {fetchItemsData} from "../actions/items-data";
//import requiresLogin from '../requires-login';

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    componentDidMount() {
        this.props.dispatch(fetchItemsData);
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const items = this.props.items.map((item) => (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    {this.props.name}
                </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <div>
                                <h4>Location Found:</h4>
                                {this.props.location}
                            </div>
                            <div>
                                <h4>Date Found:</h4>
                                {this.props.dateFound}
                            </div>
                            <div>
                                <h4>Contact Info:</h4>
                                {this.props.contactInfo}
                            </div>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        ));

        return (
            <div className="items-list">
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(ItemsList); //requires login