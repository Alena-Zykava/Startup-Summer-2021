import React from 'react';
import ReactPaginate from 'react-paginate';

import './paginate.scss';

const Paginate = () => {

    const pageChangeHandler = (page) => {
        console.log(page);
    }

    return <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}        
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={pageChangeHandler}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
    />
}

export default Paginate;