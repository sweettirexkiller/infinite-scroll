import * as types from "../actions/types";

export default function (state = {photos: {},fetching: false, fetched: false}, action) {
    switch (action.type) {
        case types.FETCH_PHOTOS_PENDING:
            return {...state, fetching: true};
        case types.FETCH_PHOTOS_FULFILLED:
            return {...state, fetching: false, fetched: true, photos: action.payload.data};
        case types.FETCH_PHOTOS_REJECTED:
            return {...state, fetching: false, fetched: false};
        default:
            return {...state};
    }
}