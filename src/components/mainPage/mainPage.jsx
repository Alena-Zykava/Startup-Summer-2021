import React, { useState, useEffect } from 'react';
import './mainPage.scss';

import { getPerson } from '../../utilities/api-service';
import PersonInfo from '../personInfo';
import PersonRepos from '../personRepos';
import EmptyPage from '../emptyPage';
import Spinner from '../spinner';

const MainPage = ({ userName }) => {
    const [isNotFound, getIsNotFound] = useState(false);
    const [loading, getLoading] = useState(true);
    const [personData, getPersonData] = useState({});
    
    useEffect(() => {
        getPerson(userName).then((res) => {
            getLoading(false);
            getIsNotFound(false);
            getPersonData(res.data);
        }).catch(() => { getIsNotFound(true) })
    }, [userName]);


    if (loading) {
        return <Spinner />
    }
    
    if (isNotFound) {
        return <EmptyPage />
    }

    return (
        <div className='main-page'>
            <PersonInfo personData={ personData}/>
            <PersonRepos userName={userName} />
        </div>
    )
}

export default MainPage;