import React, { useEffect, useState } from 'react';

import './personRepos.scss';

import { getPersonRepos } from '../../utilities/api-service';
import PersonReposItem from '../personReposItem';
import Paginate from '../paginate';
import Spinner from '../spinner';
import EmptyRepos from '../emptyRepos';
    
const PersonRepos = ({userName}) => {
    const [reposData, getReposData] = useState([]);
    const [loading, getLoading] = useState(true);
    const [isEmptyRepos, getIsEmptyRepos] = useState(false);

    useEffect(() => {
        getPersonRepos(userName).then((res) => {            
            getReposData(res.data);
            getLoading(false);
            res.data.length === 0 ? getIsEmptyRepos(true) : getIsEmptyRepos(false);            
        })
    }, [userName]);


    const items = reposData.map((repos) => {
        return (
            <PersonReposItem key={repos.id} repos={ repos }/>
        )
    })

    const contentRepos = () => {
        return (
            <div className='person-repos'>
                <h2>
                    Repositories({reposData.length})
                </h2>
                {items}
                <Paginate />
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

export default PersonRepos;