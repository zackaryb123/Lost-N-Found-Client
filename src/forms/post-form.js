import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, focus} from 'redux-form';
import Select from 'react-select';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-select/dist/react-select.css';
import 'react-dates/lib/css/_datepicker.css';
import './form.css';

import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';

import '../landing/index.css';
import {postItem} from "../actions/states-data";

import STATES from './data';

export class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            selectedOption: '',
            selectedDate: moment.localeData().longDateFormat('L'),
        };
    }

    onSubmit(values) {
        const {name, location, state, dateFound, contactInfo} = values;
        const item = {name, location, state, dateFound, contactInfo};
        return this.props
            .dispatch(postItem(item));
    }

    updateValue (selectedOption) {
        this.setState({selectedOption});
    }

    render() {
        const options = STATES['US'];
        const {selectedOption} = this.state;
        const value = selectedOption && selectedOption.value;

        return (
            <form className="post-form"
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
                    component={Input}
                    type="text"
                    name="location" />

                <label htmlFor="state">State</label>
                <Select
                    options={options}
                    name="state"
                    value={value}
                    onChange={this.updateValue}
                />

                <label htmlFor="dateFound">Date Found</label>
                <SingleDatePicker
                    name="dateFound"
                    date={this.state.date} // momentPropTypes.momentObj or null
                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
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

PostForm = connect(mapStateToProps)(PostForm)

export default reduxForm({
    //contactInfo: state.auth.currentUser.email,
    form: 'post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('post', Object.keys(errors)[0]))
})(PostForm);