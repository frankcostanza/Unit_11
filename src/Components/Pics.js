import React from 'react';
import Pic from './Pic';

const Pics = props => {

    const results = props.data;
    const query = props.query;
    let pics;
    pics = results.map(data =>
        <Pic
            url={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
            key={data.id}
            alt={data.title}/>
    );

    //creates a list of images
    return(
        <div className="photo-container">
            <h2>For {query}, I found this:</h2>
            <ul>
                {pics}
            </ul>
        </div>
    );
};


export default Pics;

