import React, {PureComponent} from 'react';
import './PaginationControls.scss';

class PaginatedControls extends PureComponent {
    render() {
        return <div className="pagination-controls">
            <button className={"pagination-controls_prev"} onClick={this.props.onPrevPage}>Prev</button>
            <div className={"pagination-controls_page-info"}>{`Page ${this.props.currentPage + 1} of ${this.props.totalPages}`}</div>
            <button className={"pagination-controls_next"} onClick={this.props.onNextPage}>Next</button>

        </div>
    }

};

export default PaginatedControls;