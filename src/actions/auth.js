import jwtDecode from 'jwt-decode';
//import {SubmissionError} from 'redux-form';

//import {API_BASE_URL} from '../config';
//import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
export const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    console.log(decodedToken);

    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken)); //changed user to username then removed username
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    //dispatch(authRequest());
    if(username === 'ZackaryB' && password === "1234567890") {
        let res = {
            authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlphY2thcnlCIiwiZmlyc3ROYW1lIjoiWmFjayIsImxhc3ROYW1lIjoiQmxheWxvY2siLCJhdmF0YXIiOiJodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS8yNDAwcHgvc3ZnX3RvX3BuZy8xOTAxMTMvMTM4OTk1MjY5Ny5wbmciLCJjb250YWN0SW5mbyI6ImVtYWlsQGVtYWlsLmNvbSIsIml0ZW1Db3VudCI6MywicmV0dXJuUmF0ZSI6MH0.QEH66OpUmECxkplJDzsRlldsXekfeMitsH_rpfg2OLk"
        };
        console.log(res);
        storeAuthInfo(res.authToken, dispatch);
        return res.json()
    }
    // return (
    //     fetch(`${API_BASE_URL}/auth/login`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password
    //         })
    //     })
    //     // Reject any requests which don't return a 200 status, creating
    //     // errors which follow a consistent format
    //         .then(res => normalizeResponseErrors(res))
    //         .then(res => res.json())
    //         .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    //         .catch(err => {
    //             const {code} = err;
    //             const message =
    //                 code === 401
    //                     ? 'Incorrect username or password'
    //                     : 'Unable to login, please try again';
    //             dispatch(authError(err));
    //             // Could not authenticate, so return a SubmissionError for Redux
    //             // Form
    //             return Promise.reject(
    //                 new SubmissionError({
    //                     _error: message
    //                 })
    //             );
    //         })
    // );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return false;
    // return fetch(`${API_BASE_URL}/auth/refresh`, {
    //     method: 'POST',
    //     headers: {
    //         // Provide our existing token as credentials to get a new one
    //         Authorization: `Bearer ${authToken}`
    //     }
    // })
    //     .then(res => normalizeResponseErrors(res))
    //     .then(res => res.json())
    //     .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    //     .catch(err => {
    //         // We couldn't get a refresh token because our current credentials
    //         // are invalid or expired, or something else went wrong, so clear
    //         // them and sign us out
    //         dispatch(authError(err));
    //         dispatch(clearAuth());
    //         clearAuthToken(authToken);
    //     });
};