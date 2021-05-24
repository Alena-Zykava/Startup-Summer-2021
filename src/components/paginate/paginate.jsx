import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { number, func } from 'prop-types';

import './paginate.scss';

const Paginate = ({ numberRepos, setCurrentPage }) => {    

    const [theFirstIndexRepo, setTheFirstIndexRepo] = useState(1);
    const [theLastIndexRepo, setTheLastIndexRepo] = useState(null);

    useEffect(() => {
        setTheLastIndexRepo(numberRepos <= 4 ? numberRepos : 4);
    }, [numberRepos]);

    const NUMBER_REPOS_ON_PAGE = 4;
    const pages = Math.ceil(numberRepos / NUMBER_REPOS_ON_PAGE);    

    const pageChangeHandler = (page) => {
        const numberPage = page.selected + 1;
        setCurrentPage(numberPage);
        setTheFirstIndexRepo(numberPage * NUMBER_REPOS_ON_PAGE - 3);
        setTheLastIndexRepo(numberPage * NUMBER_REPOS_ON_PAGE >= numberRepos ? numberRepos : numberPage * NUMBER_REPOS_ON_PAGE);
    }

    return (
        <div className='paginate'>
            <p className='paginate__subtitle'>{ theFirstIndexRepo }-{theLastIndexRepo} of {numberRepos} items</p>
            <ReactPaginate
                pageCount={pages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                onPageChange={pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}        
            />
        </div>
        
    )
    
}

Paginate.propTypes = {
    numberRepos: number,
    setCurrentPage: func
}

export default Paginate;