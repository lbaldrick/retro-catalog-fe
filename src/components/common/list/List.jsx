import React from 'react';
import './List.scss';

const List = (ItemComponent) => ({ items, onClick}) => {
    return <ul className="list">
        {
            items.map((item) =>{
                return <li className={'list_item'}>
                    <ItemComponent { ...item  } onClick={onClick} />
                </li>
            })
        }
    </ul>
};

export default List;