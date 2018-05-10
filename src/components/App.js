import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './App.css';

class App extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
    }

    renderPhotos() {
        if (this.props.photos.fetching && !this.props.photos.images.length) {
            return (
                <p>Fetching...</p>
            );
        } else if (this.props.photos.fetched) {
            const imagesList = this.props.photos.images.photo.map(({id, secret, farm, server, title}) => {
                let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                return (<img key={id} src={url} alt={title}/>);
            });

            return (
                <div className="cards">
                    {imagesList}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Photos of Dogos:</h1>
                <div>
                    {this.renderPhotos()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {photos: state.photosFetch}
}

export default connect(mapStateToProps, actions)(App);
