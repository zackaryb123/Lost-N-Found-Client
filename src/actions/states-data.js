import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchStatesDataSuccess(data)))
        .catch(err => {
            dispatch(fetchStatesDataError(err));
        });

    //         'Alabama',
    //         'Arkansas',
    //         'Florida',
    //         'Georgia',
    //         'Kentucky',
    //         'Louisiana',
    //         'Mississippi',
    //         'North Carolina',
    //         'South Carolina',
    //         'Tennessee'
};