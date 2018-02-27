import React from 'react';
import {connect} from 'react-redux';

import './index.css';

//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch();
    }

    render() {
        return (
            <div className="post-page">

            </div>
        );
    }
}

export default connect()(Profile); //requires login