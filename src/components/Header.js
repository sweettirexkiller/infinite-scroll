import React from 'react';
import {Link} from 'react-router-dom';


export default () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Dogs</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    );
}