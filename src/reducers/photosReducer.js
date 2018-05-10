import * as types from "../actions/types";

export default function (state = {images: {}, fetching: false, fetched: false}, action) {
    switch (action.type) {
        case types.FETCH_PHOTOS + '_PENDING':
            return {...state, fetching: true};
        case types.FETCH_PHOTOS + '_FULFILLED':
            return {...state, fetching: false, fetched: true, images: action.payload.data.photos};
        case types.FETCH_PHOTOS + '_REJECTED':
            return {...state, fetching: false, fetched: false};


        default:
            return {...state};
    }
}