import React from 'react';
import {Link} from 'react-router-dom';


export default ({id, secret, farm, server, title, owner}) => {
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return (
        <Link to={`/author/${owner}`}><img src={url} alt={title}/></Link>
    );
}