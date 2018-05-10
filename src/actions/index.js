import axios from 'axios';
import {FETCH_PHOTOS, FETCH_AUTHORS_PHOTOS, FETCH_AUTHORS_RESET, FETCH_AUTHORS_PROFILE} from "./types";
import keys from '../config/keys';


export const fetchPhotos = (page = null) => async dispatch => {
    dispatch({
        type: FETCH_PHOTOS,
        payload: axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${keys.flickr_key}&text=dog&${page ? `page=${page}&` : ''}format=json&nojsoncallback=1`)
    })
};

export const fetchAuthorsPhotos = (author = null) => async dispatch =>{
  dispatch({
      type: FETCH_AUTHORS_PHOTOS,
      payload: axios.get(`https://api.flickr.com/services/rest/?method=flickr.people.getPhotosOf&api_key=${keys.flickr_key}&user_id=${author}&format=json&nojsoncallback=1`)
  })
};


export const fetchAuthorsProfile = (author = null) => async dispatch =>{
    dispatch({
        type: FETCH_AUTHORS_PROFILE,
        payload: axios.get(`https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=${keys.flickr_key}&user_id=${author}&format=json&nojsoncallback=1`)
    })
};

export const resetAuthor = () => async dispatch =>{
    dispatch({
        type: FETCH_AUTHORS_RESET
    })
};