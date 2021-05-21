import React, { useState, useEffect } from 'react';
import './mainPage.scss';
import { string } from 'prop-types';

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
        }).catch(() => {
            getLoading(false);
            getIsNotFound(true)
        })
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
            <PersonRepos userName={userName} numberRepos={ personData.public_repos }/>
        </div>
    )
}

MainPage.propTypes = {
    userName: string
};

export default MainPage;