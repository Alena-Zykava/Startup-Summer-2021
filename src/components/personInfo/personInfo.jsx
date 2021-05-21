import React from 'react';
import './personInfo.scss';
import { object } from 'prop-types';

const PersonInfo = ({personData}) => { 
    return (
        <div className='person-info'>
            <div className='person-info__photo'>
                <img src={personData.avatar_url} alt='Avatar' />
            </div>
            <h1 className='person-info__name'>{ personData.name }</h1>
            <a className='person-info__username' href={personData.html_url} target='_blank' rel='noreferrer'>{ personData.login}</a>
            <div className='person-info__friends'>
                <div className='person-info__followers'>
                    <i className='fas fa-user-friends'></i>
                    <span>{personData.followers} followers</span>
                </div>
                <div>
                    <i className='fas fa-user'></i>
                    <span>{personData.following} following</span>
                </div>                
            </div>
        </div>
    )
}

PersonInfo.propTypes = {
    personData: object
}

export default PersonInfo;