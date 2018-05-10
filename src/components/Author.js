import React, {Component} from 'react';

class Author extends Component {

    render() {
        const authorId = this.props.match.params.id;
        return (
            <div>
                Author: {authorId}
            </div>
        );
    }
}


export default Author;
