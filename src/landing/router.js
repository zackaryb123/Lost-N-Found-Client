import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './index.css';

export class LandingRouter extends React.Component {
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/landing" />;
        }

        return(
            <div>
                Routing...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingRouter);