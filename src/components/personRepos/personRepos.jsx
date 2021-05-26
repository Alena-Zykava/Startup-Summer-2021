import React, { useEffect, useState } from 'react';
import { string, number } from 'prop-types';
import './personRepos.scss';

import { getPersonRepos } from '../../utilities/api-service';
import PersonReposItem from '../personReposItem';
import Paginate from '../paginate';
import Spinner from '../spinner';
import EmptyRepos from '../emptyRepos';
    
const PersonRepos = ({userName, numberRepos}) => {
    const [reposData, setReposData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEmptyRepos, setIsEmptyRepos] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        getPersonRepos(userName, currentPage).then((res) => {
            setReposData(res.data);
            setLoading(false);
            res.data.length === 0 ? setIsEmptyRepos(true) : setIsEmptyRepos(false);            
        })
    }, [userName, currentPage]);


    const items = reposData.map((repos) => {
        return (
            <PersonReposItem key={repos.id} repos={ repos }/>
        )
    })

    const contentRepos = () => {
        return (
            <div className='person-repos'>                
                <div>
                    <h2 className='person-repos__title'>
                        Repositories({numberRepos})
                    </h2>
                    {items}
                </div>                
                <Paginate numberRepos={numberRepos} setCurrentPage={ setCurrentPage }/>
            </div>
        )
    }

    const contentEmptyRepos = isEmptyRepos ? <EmptyRepos /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || isEmptyRepos) ? contentRepos() : null;
    
    return (
        <>
            {spinner}
            {contentEmptyRepos}
            {content}
        </>
    )
}

PersonRepos.propTypes = {
    userName: string,
    numberRepos: number
}

export default PersonRepos;