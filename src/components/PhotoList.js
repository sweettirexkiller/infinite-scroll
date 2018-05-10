import React, {Component} from 'react';
import Photo from './Photo';

import './PhotosList.css'

class PhotoList extends Component {
    render() {
        let i = 0;
        const imagesList = this.props.images.length && this.props.images.map(image => {
            return <Photo  key={i++} {...image}/>
        });


        return (
            <div className="gallery">
                <div className="cards">
                    {imagesList.length && imagesList}
                </div>
            </div>
        )
    }
}


export default PhotoList;