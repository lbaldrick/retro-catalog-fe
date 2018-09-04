import React from 'react';
import './List.scss';

const List = (ItemComponent) => ({ items, onClick}) => {
    return <ul className="list">
        {
            items.map((item, index) =>{
                return <li className={'list_item'}>
                    <ItemComponent { ...item  } key={index} onClick={onClick} />
                </li>
            })
        }
    </ul>
};

export default List;