import axios from 'axios';
import {FETCH_PHOTOS} from "./types";
import keys from '../config/keys';


export const fetchPhotos = () => async dispatch => {
    dispatch({
        type: FETCH_PHOTOS,
        payload: axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.flickr_key}&text=dogs&format=json&nojsoncallback=1`)
    })
};