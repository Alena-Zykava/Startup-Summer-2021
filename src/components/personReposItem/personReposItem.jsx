import React from 'react';
import './personReposItem.scss';
import { object } from 'prop-types';

const PersonReposItem = ({repos}) => {
    return (
        <div className='person-repos__item'>
            <a href={repos.html_url} target='_blank' rel='noreferrer'>
                <p className='person-repos__item__title'>{repos.name}</p>
            </a>
            <p>{repos.description}</p>
        </div>
    )
}

PersonReposItem.propTypes = {
    repos: object
}

export default PersonReposItem;