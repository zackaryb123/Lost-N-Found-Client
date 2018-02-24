import React from 'react';
import { Collapse, Button, CardBody, Card, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';

import './index.css';

//import ItemsList from './find-items-list';
import {fetchStatesData} from "../actions/states-data";
import {fetchItemsData} from "../actions/items-data";
//import {states} from "../actions/utils";

//import requiresLogin from '../requires-login';

export class StatesList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    // componentDidMount() {
    //     this.props.dispatch(fetchStatesData());
    // }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {
        const states = this.props.states;
        console.log(states);
        return (
            <ListGroupItem style={{listStyle: 'none'}}>
                <div className="states">
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{states.name}</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                qwertyuiopasdfghjklzxcvbnm
                                {/*<ItemsList />*/}
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </ListGroupItem>
        );
    }
}

export default connect()(StatesList); //requires login