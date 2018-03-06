import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from "redux-form";

export const FETCH_STATES_DATA_SUCCESS = 'FETCH_STATES_DATA_SUCCESS';
export const fetchStatesDataSuccess = data => ({
    type: FETCH_STATES_DATA_SUCCESS,
    data
});

export const FETCH_STATES_DATA_ERROR = 'FETCH_STATES_DATA_ERROR';
export const fetchStatesDataError = error => ({
    type: FETCH_STATES_DATA_ERROR,
    error
});

export const fetchStatesData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/states`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Accept : 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(fetchStatesDataSuccess(data));
        })
        .catch(err => {
            dispatch(fetchStatesDataError(err));
        });
};

export const postItem = item => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/states/post`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(item)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {dispatch(fetchStatesDataSuccess(data));})
        .then(alert('Post Successfull!'))
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

export const removePost = (item, index) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const currentUser = getState().auth.currentUser;

    //Debug
    console.log(item);
    console.log(currentUser);
    console.log(index);

    if (item.user !== currentUser.username){
        alert('You are not the creator of this post!');
    } else {
        return fetch(`${API_BASE_URL}/states/remove/${item.state}/${index}`, {
            method: 'PUT',
            headers: {
                // Provide our auth token as credentials
                'content-type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
        })
            .then(dispatch(fetchStatesData()));
    }
};