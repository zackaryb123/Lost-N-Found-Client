import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const fetchUserInfoSuccess = data => ({
    type: FETCH_USER_INFO_SUCCESS,
    data
});

export const FETCH_USER_INFO_ERROR = 'FETCH_USER_INFO_ERROR';
export const fetchUserInfoError = error => ({
    type: FETCH_USER_INFO_ERROR,
    error
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const fetchUserInfo = (username) => (dispatch , getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/${username}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchUserInfoSuccess(data))
        })
        .catch(err => {
            dispatch(fetchUserInfoError(err));
        });
};