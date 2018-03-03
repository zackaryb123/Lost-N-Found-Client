import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import '../landing/index.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegisterForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, email} = values;
        const user = {username, password, firstName, lastName, email};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props
                .dispatch(login(username, password)));
    }

    render() {
        return (
            <form className="register-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}
                >

                    <label htmlFor="firstName">First name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="firstName" />

                    <label htmlFor="lastName">Last name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="lastName" />

                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}/>

                    <label htmlFor="email">Email</label>
                    <Field
                        component={Input}
                        type="email"
                        name="email"
                        validate={[required, nonEmpty, isTrimmed]}/>

                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}/>

                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                    >
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterForm);