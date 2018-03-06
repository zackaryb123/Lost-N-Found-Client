import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Dropzone from './dropzone';
import {updateProfile} from "../actions/auth";

export class UpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            files: []
        };
    }

    handleOnDrop(files) {
        this.setState({
            files,
            disabled: files.length === 1
        });
    }

    onSubmit(values) {
        //const formData = new FormData(this.state.files[0]);
        //formData.append('email', values.email);
        return this.props.dispatch(updateProfile(values));
    }

    render(){
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}
            >
                {error}
                <label htmlFor="email">Email</label>
                <Field
                    component={Input}
                    type="email"
                    name="email"
                />
                {/*<label htmlFor="files">Avatar</label>*/}
                {/*<Field*/}
                    {/*component={() =>*/}
                        {/*<Dropzone*/}
                            {/*handleOnDrop={this.handleOnDrop.bind(this)}*/}
                            {/*disabled={this.state.disabled}*/}
                            {/*files={this.state.files}*/}
                            {/*name="avatar"*/}
                        {/*/>*/}
                    {/*}*/}
                    {/*name="avatar"*/}
                    {/*type="file"*/}
                {/*/>*/}
                <button disabled={this.props.pristine || this.props.submitting}>
                    Finish
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'update',
    multipartForm : true,
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('update',  Object.keys(errors)[0])),
})(UpdateForm);