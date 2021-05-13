import React,  { useEffect, useState } from 'react';
import './personInfo.scss';

import {getPerson} from '../../utilities/api-service'

const PersonInfo = ({userName}) => {

    const [personData, getPersonData] = useState({});

    useEffect(() => {
        getPerson(userName).then((res) => {
            getPersonData(res.data);            
        })
    }, [userName])


    return (
        <>
            <div className='person-photo'>
                <img src={personData.avatar_url} alt='Avatar' />
            </div>
            <h1 className='person-name'>{ personData.name }</h1>
            <a className='person-username' href={personData.html_url}>{ personData.login}</a>
            <div>
                <div>
                    <i className='fas fa-user-friends'></i>
                    <span>{personData.followers} followers</span>
                </div>
                <div>
                    <i className='fas fa-user'></i>
                    <span>{personData.following} following</span>
                </div>                
            </div>
        </>
    )
}

export default PersonInfo;