import {combineReducers} from 'redux';
import photosReducer from './photosReducer'
import authorReducer from './authorReducer'


export default combineReducers({
    photosFetch: photosReducer,
    author: authorReducer
})