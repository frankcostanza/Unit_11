import React from 'react';

//Responsible to just render the image
const Pic = props => (
    <li>
        <img src={props.url} alt={props.alt}/>
    </li>
);

export default Pic;
