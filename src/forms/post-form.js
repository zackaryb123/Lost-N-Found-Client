import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import moment from 'moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import DropdownList from 'react-widgets/lib/DropdownList'
import momentLocalizer from "react-widgets-moment";

import 'react-widgets/dist/css/react-widgets.css';
import './form.css';

import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';

import '../landing/index.css';
import {postItem} from "../actions/states-data";

import STATES from './data';
momentLocalizer(moment);

export class PostForm extends React.Component {
    onSubmit(values) {
        const dateFound = moment(values.dateFound).format('MMM Do YY');
        const {name, location, state, contactInfo} = values;
        const item = {name, location, state, dateFound, contactInfo};
        return this.props
            .dispatch(postItem(item))
        ;
    }

    componentWillUnmount() {
        return <Redirect to="/dashboard/find" />
    }

    render() {
        const options = STATES['US'];

        const renderDropdownList = ({ input, data, valueField, textField }) =>
            <DropdownList {...input}
                          data={data}
                          valueField={valueField}
                          textField={textField}
                          onChange={input.onChange} />;

        const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
            <DateTimePicker
                onChange={onChange}
                format="DD MMM YYYY"
                time={showTime}
                value={!value ? null : new Date(value)}
            />;

        return (
            <form className="post-form column"
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values))}
            >
                <label htmlFor="name">Item Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="name"
                    validate={[required, nonEmpty, isTrimmed]}
                />

                <label htmlFor="location">Location Found</label>
                <Field
                    name="location"
                    component={Input}
                    type="text"
                />
                <label htmlFor="state">State</label>
                <Field
                    name="state"
                    component={renderDropdownList}
                    data={options}
                    valueField="value"
                    textField="color"
                />
                <label htmlFor="dateFound">Date Found</label>
                <Field
                    name="dateFound"
                    showTime={false}
                    component={renderDateTimePicker}
                />
                <label htmlFor="contactInfo">Contact Info</label>
                <Field
                    component={Input}
                    type="text"
                    name="contactInfo"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >
                    Post
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    states: state.states.data
});

PostForm = connect(mapStateToProps)(PostForm);

export default reduxForm({
    form: 'post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('post', Object.keys(errors)[0]))
})(PostForm);