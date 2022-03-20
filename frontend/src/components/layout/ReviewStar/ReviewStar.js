import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faStarHalfStroke  } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
const ReviewStar = ({rating, numOfReview}) => {

    const starDisplay = [1,2,3,4,5].map((num) => Math.round(rating) >= num ? ((Number(num) - .5) >= rating ?
        <FontAwesomeIcon icon={faStarHalfStroke} key={num} /> : 
        <FontAwesomeIcon icon={fasStar} key={num} />) : 
        <FontAwesomeIcon icon={farStar} key={num}/>);
    return (
        <>
            <span>{starDisplay}{' '}{rating}</span>
            <span>&nbsp;&nbsp;{numOfReview} reviews</span>
        </>
    );
}
 
export default ReviewStar;