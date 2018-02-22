// import {
//     FETCH_PROFILE_DATA_SUCCESS,
//     FETCH_PROFILE_DATA_ERROR
// } from '../actions/profile-data';
//
// const initialState = {
//     data: '',
//     error: null
// };
//
// export default function reducer(state = initialState, action) {
//     if (action.type === FETCH_PROFILE_DATA_SUCCESS) {
//         return Object.assign({}, state, {
//             data: action.data,
//             error: null
//         });
//     } else if (action.type === FETCH_PROFILE_DATA_ERROR) {
//         return Object.assign({}, state, {
//             error: action.error
//         });
//     }
//     return state;
// }