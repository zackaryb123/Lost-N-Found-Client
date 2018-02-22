import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {loadAuthToken} from './local-storage';

import authReducer from './reducers/auth';
//import profileDataReducer from './reducers/profile-data';
import itemDataReducer from './reducers/items-data';
import statesDataReducer from './reducers/states-data';

import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        // profile: profileDataReducer,
        items: itemDataReducer,
        states: statesDataReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;