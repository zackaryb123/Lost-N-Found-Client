import React from 'react';
import { Collapse, Button, CardBody, Card, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';

import './index.css';

import ItemsList from './find-items-list';
//import {fetchStatesData} from "../actions/states-data";
//import requiresLogin from '../requires-login';

export class StatesList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    // componentDidMount() {
    //     this.props.dispatch(fetchStatesData());
    // }


    render() {
        const states = this.props.states;
        const itemsList = Object.keys(this.props.states.items).map((item, index) =>
            <ItemsList key={index} items={this.props.states.items[item]}/>
        );
        return (
            <ListGroupItem style={{listStyle: 'none'}}>
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
            </ListGroupItem>
        );
    }
}

// const mapStateToProps = state => ({
//     items: state.items.data
// });

export default connect()(StatesList); //requires login