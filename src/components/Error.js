import React from 'react';


export default ({message}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{message}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}