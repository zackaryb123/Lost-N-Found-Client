import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {connect} from 'react-redux';

import './index.css';

import ItemsList from './find-items-list';
//import requiresLogin from '../requires-login';

export class StatesList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {
        const states = this.props.states;
        const itemsList = Object.keys(this.props.states.items).map((item, index) =>
            <ItemsList key={index} items={this.props.states.items[item]}/>
        );
        return (
            <div className="states">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{states.name}</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {itemsList}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//
// });

export default connect()(StatesList); //requires login