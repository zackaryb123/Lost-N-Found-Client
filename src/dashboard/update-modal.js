import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import './index.css';
import UpdateForm from "../forms/update-form";

//import requiresLogin from '../requires-login';

export class UpdateModal extends React.Component {
    render() {
        return (
            <div className="update-modal">
                <Route path="/dashboard/profile-update" render={() => <UpdateForm />} />
            </div>
        );
    }
}

export default connect()(UpdateModal); //requires login