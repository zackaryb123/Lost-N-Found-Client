import {
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_ERROR
} from '../actions/users';

const initialState = {
    data: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_USER_INFO_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_USER_INFO_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
