import React from 'react';
import './GameListItem.scss';
import StarRating from "../common/rating/StarRating";


const GamesListItem = ({name, datePurchased, price, condition, imageUrl, rating}) => {
    return <div className={'games-list-item'}>
        <div className={'games-list-item_image'}><img src={imageUrl}/></div>
        <div className={'games-list-item_info'}>
            <div className={'games-list-item_info_name'}><label>Name: </label>{name}</div>
            <div className={'games-list-item_info_datePurchased'}><label>Date Purchased: </label>{datePurchased}</div>
            <div className={'games-list-item_info_price'}><label>Price: £</label>{price}</div>
            <div className={'games-list-item_info_condition'}><label>Condition: </label>{condition}</div>
            <div className={'games-list-item_info_rating'}><label>Rating: </label><StarRating numOfStars={rating}/></div>
        </div>
    </div>
};

export default GamesListItem;