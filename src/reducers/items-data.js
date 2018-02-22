import {
    FETCH_ITEMS_DATA_SUCCESS,
    FETCH_ITEMS_DATA_ERROR
} from '../actions/items-data';

const initialState = {
    items: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_ITEMS_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_ITEMS_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}