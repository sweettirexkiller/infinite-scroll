import * as types from "../actions/types";

export default function (state = {images: [], fetching: false, fetched: false}, action) {
    switch (action.type) {
        case types.FETCH_PHOTOS + '_PENDING':
            return {...state, fetching: true};
        case types.FETCH_PHOTOS + '_FULFILLED':
            return {...state, fetching: false, fetched: true, images: state.images.concat(action.payload.data.photos.photo), page: action.payload.data.photos.page};
        case types.FETCH_PHOTOS + '_REJECTED':
            return {...state, fetching: false, fetched: false, error: action.payload};


        default:
            return {...state};
    }
}