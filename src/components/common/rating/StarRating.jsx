import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarRating = ({numOfStars}) => {
    const stars = [];

    for (let x = 0; x < numOfStars; x++) {
        stars.push( <FontAwesomeIcon icon="star"/>)
    }
    return <div className={'star-rating'}>
        {stars}
    </div>
};

export default StarRating;