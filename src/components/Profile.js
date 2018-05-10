import React from 'react';


export default ({profile}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{profile['first_name']} {profile['last_name']}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}