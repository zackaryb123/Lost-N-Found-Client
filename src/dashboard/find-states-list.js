import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {connect} from 'react-redux';

import './index.css';

import ItemsList from './find-items-list';
import {fetchStatesData} from "../actions/states-data";

//import requiresLogin from '../requires-login';

export class StatesList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    componentDidMount() {
        this.props.dispatch(fetchStatesData);
    }

    toggle(){
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        console.log(this.props.states);

        const states = this.props.states.map((state) => (
            <div className="states">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{state}</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <ItemsList />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        ));

        return (
            <div className="states-list">
                {states}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    states: state.states.states,
});

export default connect(mapStateToProps)(StatesList); //requires login