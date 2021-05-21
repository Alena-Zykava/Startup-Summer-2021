import React, { useEffect, useState } from 'react';
import { string, number } from 'prop-types';
import './personRepos.scss';

import { getPersonRepos } from '../../utilities/api-service';
import PersonReposItem from '../personReposItem';
import Paginate from '../paginate';
import Spinner from '../spinner';
import EmptyRepos from '../emptyRepos';
    
const PersonRepos = ({userName, numberRepos}) => {
    const [reposData, getReposData] = useState([]);
    const [loading, getLoading] = useState(true);
    const [isEmptyRepos, getIsEmptyRepos] = useState(false);
    const [currentPage, getCurrentPage] = useState(1);

    useEffect(() => {
        getPersonRepos(userName, currentPage).then((res) => {            
            getReposData(res.data);
            getLoading(false);
            res.data.length === 0 ? getIsEmptyRepos(true) : getIsEmptyRepos(false);            
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
                <Paginate numberRepos={numberRepos} getCurrentPage={ getCurrentPage }/>
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