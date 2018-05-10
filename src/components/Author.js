import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import PhotosList from './PhotoList';
import Error from './Error';
import Loader from './Loader';
import Profile from './Profile';



class Author extends Component {

    componentDidMount() {
        const authorId = this.props.match.params.id;
        this.props.fetchAuthorsProfile(authorId);
        // this.props.fetchAuthorsPhotos(authorId);
    }


    componentWillUnmount() {
        this.props.resetAuthor();
    }


    render() {
        const {fetchingProfile, fetchedProfile, profile} = this.props.profile;
        // const {fetchingImages, fetchedImages, images} = this.props.profile;
        return (
            <div>
                {fetchingProfile && !profile && <Loader/>}
                {fetchedProfile && profile && (<Profile profile={profile}/>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.author
    }

}


export default connect(mapStateToProps, actions)(Author);
