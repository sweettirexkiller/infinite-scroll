import axios from 'axios';
import {FETCH_PHOTOS} from "./types";

export const fetchPhotos = () => dispatch => {

    dispatch({
        type: FETCH_PHOTOS,
        payload: axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_PUB_KEY}text=dogs&format=json&nojsoncallback=1`)
    })
};