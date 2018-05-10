import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './App.css';

class App extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }


    componentWillMount() {
        this.props.fetchPhotos();
    }


    componentWillUnmount() {
        window.removeEventListener('scroll',this.onScroll, false);
    }

    onScroll = () => {
        if(
            (window.innerHeight + window.scrollY)  >= (document.body.offsetHeight - 500)
            && this.props.images.length
            && !this.props.fetching
        ){
            this.props.fetchPhotos();
        }
    };


    renderPhotos() {
        if (this.props.fetching && !this.props.images.length) {
            return (
                <p>Fetching...</p>
            );
        } else if (this.props.fetched) {
            const imagesList = this.props.images.map(({id, secret, farm, server, title}) => {
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
    return {
        images: state.photosFetch.images,
        fetching: state.photosFetch.fetching,
        fetched: state.photosFetch.fetched
    }
}

export default connect(mapStateToProps, actions)(App);
