//import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './utils';

export const FETCH_ITEMS_DATA_SUCCESS = 'FETCH_ITEMS_DATA_SUCCESS';
export const fetchItemsDataSuccess = data => ({
    type: FETCH_ITEMS_DATA_SUCCESS,
    data
});

export const FETCH_ITEMS_DATA_ERROR = 'FETCH_ITEMS_DATA_ERROR';
export const fetchItemsDataError = error => ({
    type: FETCH_ITEMS_DATA_ERROR,
    error
});

export const fetchItemsData = () => (dispatch, getState) => {
    //const authToken = getState().auth.authToken;

    let data =  JSON.stringify({
        items: [
            {
                name: 'Glasses',
                state: 'Georgia',
                location: 'Lenox Mall',
                dateFound: Date.now(),
                contactInfo: 'email@email.com'
            },
            {
                name: 'Shoes',
                state: 'Georgia',
                location: 'Lenox Mall',
                dateFound: Date.now(),
                contactInfo: 'email@email.com'
            },
            {
                name: 'Hat',
                state: 'Georgia',
                location: 'Lenox Mall',
                dateFound: Date.now(),
                contactInfo: 'email@email.com'
            },
        ]
    });

    return data.json()
        .then(({data}) => dispatch(fetchItemsDataSuccess(data)))
        .catch(err => {
            dispatch(fetchItemsDataError(err));
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