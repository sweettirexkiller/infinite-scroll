import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import PhotoList from './PhotoList';
import Loader from './Loader';
import Error from './Error';


class Gallery extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
            && this.props.images.length
            && !this.props.fetching
        ) {
            this.props.fetchPhotos(this.props.page + 1);
        }
    };

    render() {

        return (
            <div>
                <div>
                    {this.props.error ? <Error/> : <PhotoList images={this.props.images}/>}
                </div>
                {this.props.fetching && <Loader/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: state.photosFetch.images,
        fetching: state.photosFetch.fetching,
        fetched: state.photosFetch.fetched,
        error: state.photosFetch.error,
        page: state.photosFetch.page
    }
}

export default connect(mapStateToProps, actions)(Gallery);
