import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

    componentDidMount() {
        this.props.fetchPhotos();
    }

    render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

function mapStateToProps(state){
  return {photos: state.photos}
}

export default connect(mapStateToProps,actions)(App);
