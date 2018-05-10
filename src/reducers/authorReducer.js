import * as types from "../actions/types";

export default function (state = {images: []}, action) {
    switch (action.type) {
        case types.FETCH_AUTHORS_PHOTOS + '_PENDING':
            return {...state, fetchingImages: true};
        case types.FETCH_AUTHORS_PHOTOS + '_FULFILLED':
            return {
                ...state,
                fetchingImages: false,
                fetchedImages: true,
                images: state.images.concat(action.payload.data.photos.photo),
                page: action.payload.data.photos.page
            };
        case types.FETCH_AUTHORS_PHOTOS + '_REJECTED':
            return {...state, fetchingImages: false, fetchedImages: false, error: action.payload};


        case types.FETCH_AUTHORS_PROFILE + '_PENDING':
            return {...state, fetchingProfile: true};
        case types.FETCH_AUTHORS_PROFILE + '_FULFILLED':
            return {
                ...state,
                fetchingProfile: false,
                fetchedProfile: true,
                profile: action.payload.data.profile
            };
        case types.FETCH_AUTHORS_PROFILE + '_REJECTED':
            return {...state, fetchingProfile: false, fetchedProfile: false, error: action.payload};



        case types.FETCH_AUTHORS_RESET:
            return {...state};

        default:
            return {...state};
    }
}