import React from 'react';
import {connect} from 'react-redux';

import './dashboard.css';

export class Avatar extends React.Component {
    render() {
        return (
            <div className="user-avatar">
                <div>
                    {/*<img id="js-Avatar" src="https://res.cloudinary.com/dripping-pixel/image/upload/w_512,h_512,c_thumb,g_face/5airl0aj2h8s00000962.jpg">*/}
                </div>
                <h1>Username</h1>
            </div>
        );
    }
}

export default connect()(Avatar);