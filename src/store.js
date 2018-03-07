import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';

import authReducer from './reducers/auth';
import statesDataReducer from './reducers/states-data';
import userInfoReducer from './reducers/user'

import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        states: statesDataReducer,
        user: userInfoReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    store.dispatch(setAuthToken(authToken));
    store.dispatch(refreshAuthToken());
}

export default store;