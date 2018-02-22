//import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './utils';

export const FETCH_PROFILE_DATA_SUCCESS = 'FETCH_PROFILE_DATA_SUCCESS';
export const fetchProfileDataSuccess = data => ({
    type: FETCH_PROFILE_DATA_SUCCESS,
    data
});

export const FETCH_PROFILE_DATA_ERROR = 'FETCH_PROFILE_DATA_ERROR';
export const fetchProfileDataError = error => ({
    type: FETCH_PROFILE_DATA_ERROR,
    error
});

export const fetchProfileData = () => (dispatch, getState) => {
    //const authToken = getState().auth.authToken;

    let data = JSON.stringify({
            username: 'ZackaryB',
            firstName: 'Zack',
            lastName: 'Blaylock',
            avatar: 'https://openclipart.org/image/2400px/svg_to_png/190113/1389952697.png',
            contactInfo: 'email@email.com',
            itemCount: 3,
            returnRate: 0,
    });

    return data.json()
        .then(({data}) => dispatch(fetchProfileDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProfileDataError(err));
        });


    // return fetch(`${API_BASE_URL}/protected`, {
    //     method: 'GET',
    //     headers: {
    //         // Provide our auth token as credentials
    //         Authorization: `Bearer ${authToken}`
    //     }
    // })
    //     .then(res => normalizeResponseErrors(res))
    //     .then(res => res.json())
    //     .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    //     .catch(err => {
    //         dispatch(fetchProtectedDataError(err));
    //     });
};