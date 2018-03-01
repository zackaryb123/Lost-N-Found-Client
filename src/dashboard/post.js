import React from 'react';
import {connect} from 'react-redux';

import './index.css';
import PostForm from "../forms/post-form";

//import requiresLogin from '../requires-login';

export class Profile extends React.Component {
    render() {
        return (
            <div className="post-page">
                <PostForm />
            </div>
        );
    }
}

export default connect()(Profile); //requires login