import React from 'react';
import List from "./List.jsx";
import PaginatedControls from "../pagination/PaginationControls.jsx";

const PaginatedList = (ItemComponent) => ({ items, currentPage, totalPages, onNextPage, onPrevPage }) => {
    const ListComponent = List(ItemComponent);
    return <div className="paginated-list">
        <ListComponent items={items}/>
        <PaginatedControls currentPage={currentPage}
                           totalPages={totalPages}
                           onNextPage={onNextPage}
                           onPrevPage={onPrevPage}/>
    </div>
};

export default PaginatedList;