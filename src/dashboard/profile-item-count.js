import React from 'react';
import {connect} from 'react-redux';

import './profile.css';


export class ProfileItemCount extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProfileData());
    // }

    render() {
        return (
            <div className="items-count">
                <div>
                    <p>[<em>{this.props.itemCount}</em>]</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemCount: state.auth.itemCount
});

export default connect(mapStateToProps)(ProfileItemCount);